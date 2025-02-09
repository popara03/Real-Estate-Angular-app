import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DbAlterCheckService } from '../../../../services/dbAlterCheck/db-alter-check.service';
import { PropertyInsertObjectBuilderService } from './services/propertyInsertObjectBuilder/property-insert-object-builder.service';
import { ModalStatusService } from '../../../../services/modalStatus/modal-status.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css',
})
export class AddPropertyComponent {
  constructor(
    private propertyInsertObjectBuilder:PropertyInsertObjectBuilderService,
    private modalStatusService:ModalStatusService,
    private http: HttpClient,
    private dbAlterCheckService:DbAlterCheckService
  ) { }

  //ako je u pitanju edit nekretnine, podaci se ucitavaju
  propertyId = Number(window.location.href.split('/').pop()?.slice(0, -1)) ? Number(window.location.href.split('/').pop()?.slice(0, -1)) : null;

  //podaci za dropdownove
  states: any[] = [];
  cities: any[] = [];

  //flag za azuriranje ddl-ova pri promenama u bazi
  dbChanged = false;

  fillDdl(table:string){
    if(table == 'city'){
      this.http.post(`http://localhost/ngproj/backend/selectAll.php`, {table: table}).subscribe((data: any) => {
        this.cities = data;
      });
    }
    else{
      this.http.post(`http://localhost/ngproj/backend/selectAll.php`, {table: table}).subscribe((data: any) => {
        this.states = data;
      });
    }
  }

  //flag za otvaranje dinamickog modala
  showModal = false;

  //objekat za unos podataka
  insertObject : any = null;

  ngOnInit() {
    //resetovanje objekta za unos podataka
    this.propertyInsertObjectBuilder.reset();

    // postavljanje validacije za image input polje
    if(this.propertyId) {
      // Ako je u pitanju edit, slika nije obavezna jer postoji od ranije
      this.mainForm.get('image')?.clearValidators();
    } else {
      // Ako je u pitanju insert, slika je obavezna
      this.mainForm.get('image')?.setValidators([Validators.required]);
    }

    //u slucaju edita, ucitavanje podataka o nekretnini za izmenu
    if(this.propertyId){
      this.http.get('http://localhost/ngproj/backend/property/getSingleProperty.php?id=' + this.propertyId).subscribe((data: any) => {
        this.propertyInsertObjectBuilder.set(data);
        //poziv f-je za popunjavanje default vrednosti forme
        this.fillForm(data);
      });
    }

    //inicijalizacija objekta za unos podataka
    this.propertyInsertObjectBuilder.insertObject$.subscribe(obj => {
      if(this.insertObject != null){
        switch(this.propertyInsertObjectBuilder.changedProperty){
          case 'bedrooms':
            this.isBedroomInvalid();
            break;
          case 'kitchens':
            this.isKitchenInvalid();
            break;
          case 'bathrooms':
            this.isBathroomInvalid();
            break;
        }
      }

      this.insertObject = obj;
    });

    //subskripcija na promene u prikazu modala
    this.modalStatusService.showModal$.subscribe(show => {
      this.showModal = show;
    });

    //subskripcija na promene u bazi
    this.dbAlterCheckService.dbChanged$.subscribe(changed => {
      this.dbChanged = changed;

      //azuriranje ddl-ova
      if(changed){
        this.fillDdl('state');
        this.fillDdl('city');
      }
    });

    //incijalno popunjavanje ddl-ova
    this.fillDdl('state');
    this.fillDdl('city');
  }

  toggleModal() {
    this.modalStatusService.toggleModal();
  }

  //////////////////////////////////////////

  //form group i validacija polja
  mainForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    image: new FormControl<any>(null, [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    gardenArea: new FormControl('', [Validators.required, Validators.min(1)]),
    floors: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    priceFixed: new FormControl(false),
    ownerEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    ownerPhone: new FormControl('', [Validators.required, Validators.pattern('^[0-9+\\-\\s]{5,}$')]),
  });

  //popunjavanje polja u formi u slucaju edita
  fillForm(obj: any){
    this.mainForm.patchValue({
      title: obj.title,
      description: obj.description,
      address: obj.address,
      state: obj.state_id,
      city: obj.city_id,
      gardenArea: obj.garden,
      floors: obj.floors,
      price: obj.price,
      priceFixed: Boolean(Number(obj.price_fixed)),
      ownerEmail: obj.owner_email,
      ownerPhone: obj.owner_phone
    });
    this.imageSrc = obj.img;
  }

  //////////////////////////////////////////

  //file input, nj. validacija, i reader za prikaz uploadovane slike
  selectedFile: File | null = null;
  imageSrc: FileReader | string = '';

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      
      this.selectedFile = file;

      //reader za prikaz slike po uploadu
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.imageSrc = reader;

      // Samo radi validacije čuvamo naziv fajla, tek na kraju u submitu rucno dodajemo file objekat u formData
      this.mainForm.patchValue({
        image: file.name
      });
    }
    else{
      this.selectedFile = null;
      this.mainForm.patchValue({
        image: null
      });
    }
  }

  isFileInvalid() {
    return !this.selectedFile && this.mainForm.get('image')?.touched;
  }

  //////////////////////////////////////////

  //flagovi za prikazivanje poruka o nevalidnim sobama
  bedroomModalInvalid = false;
  kitchenModalInvalid = false;
  bathroomModalInvalid = false;

  //f-je za proveru neophodnih soba
  isBedroomInvalid(){
    if(this.insertObject.bedrooms.length == 0){
      this.bedroomModalInvalid = true;
      return true;
    }
    else{
      this.bedroomModalInvalid = false;
      return false;
    }
  }

  isKitchenInvalid(){
    if(this.insertObject.kitchens.length == 0){
      this.kitchenModalInvalid = true;
      return true;
    }
    else{
      this.kitchenModalInvalid = false;
      return false;
    }
  }

  isBathroomInvalid(){
    if(this.insertObject.bathrooms.length == 0){
      this.bathroomModalInvalid = true;
      return true;
    }
    else{
      this.bathroomModalInvalid = false;
      return false;
    }
  }

  //////////////////////////////////////////

  formInvalid : boolean = false;
  msg : string = '';

  // mainFormSubmit
  mainFormSubmit() {
    if(this.mainForm.invalid)
    {
      this.markAllFieldsAsTouched();

      this.formInvalid = true;
      console.error("Form invalid, check messages.");
    }
    else if(this.isBedroomInvalid()){
      this.formInvalid = true;
      console.error("Bedroom invalid, check messages.");
    }
    else if(this.isKitchenInvalid()){
      this.formInvalid = true;
      console.error("Kitchen invalid, check messages.");
    }
    else if(this.isBathroomInvalid()){
      this.formInvalid = true;
      console.error("Bathroom invalid, check messages.");
    }
    else{
      //kreiranje form data objekta jer saljemo i sliku
      //kopiramo vrednosti iz formGroup u formData objekat
      const formData = new FormData();
      formData.append('title', String(this.mainForm.value.title));
      formData.append('description', String(this.mainForm.value.description));
      formData.append('address', String(this.mainForm.value.address));
      formData.append('cityId', String(this.mainForm.value.city));
      formData.append('stateId', String(this.mainForm.value.state));
      formData.append('gardenArea', String(this.mainForm.value.gardenArea));
      formData.append('floors', String(this.mainForm.value.floors));
      formData.append('price', String(this.mainForm.value.price));
      formData.append('priceFixed', String(this.mainForm.value.priceFixed));
      formData.append('ownerEmail', String(this.mainForm.value.ownerEmail));
      formData.append('ownerPhone', String(this.mainForm.value.ownerPhone));
      formData.append('bedrooms', JSON.stringify(this.insertObject.bedrooms));
      formData.append('bathrooms', JSON.stringify(this.insertObject.bathrooms));
      formData.append('kitchens', JSON.stringify(this.insertObject.kitchens));
      formData.append('garages', JSON.stringify(this.insertObject.garages));
      formData.append('pools', JSON.stringify(this.insertObject.pools));
      
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }
      else if(this.propertyId){ //ako je edit, a slika nije promenjena salje prazan string
        formData.append('image', '');
      }

      //ako je edit, salje se i id nekretnine
      if(this.propertyId){
        formData.append('property_id', String(this.propertyId));
      }

      //slanje podataka na server
      if(!this.propertyId){ //ako je insert
        this.http.post('http://localhost/ngproj/backend/property/insertProperty.php', formData).subscribe(
          (data: any) => {
            this.msg = data;
    
            this.mainForm.reset();
    
            // Resetting the object for data entry to clear arrays for rooms
            this.insertObject = null;
            this.propertyInsertObjectBuilder.reset();

            // Resetting the image preview
            this.imageSrc = '';
          },
          (error: any) => {
              console.error('Error occurred:', error);
              this.msg = error.error; // Displaying the error message from the server
          }
        );
      }
      else{ //ako je edit
        this.http.post('http://localhost/ngproj/backend/property/editProperty.php', formData).subscribe(
          (data: any) => {
            this.msg = data;
          },
          (error: any) => {
              console.error('Error occurred:', error);
              this.msg = error.error; // Displaying the error message from the server
          }
        );
      }

      //reset invalid flagova i zatvaranje modala
      this.formInvalid = false;
      this.bedroomModalInvalid = false;
      this.bathroomModalInvalid = false;
      this.kitchenModalInvalid = false;
    }
  }

  //f-ja za obelezavanje svih polja kao fokusiranih
  //zbog file inputa, koji se ne triggeruje na submit (nema odg def. value)
  markAllFieldsAsTouched() {
    Object.values(this.mainForm.controls).forEach(control => {
      control.markAsTouched();
    });

    this.isBedroomInvalid();
    this.isKitchenInvalid();
    this.isBathroomInvalid();
  }

  //f-je za vizuelno uklanjanje kartica, kao i obj. iz odg. niza, po kliku na 'x'
  removeObject(type: string, item: any) {
    switch (type) {
      case 'bedroom':
        this.insertObject.bedrooms = this.insertObject.bedrooms.filter((x:any) => x !== item);
        this.isBedroomInvalid();
        break;
      case 'kitchen':
        this.insertObject.kitchens = this.insertObject.kitchens.filter((x:any) => x !== item);
        this.isKitchenInvalid();
        break;
      case 'bathroom':
        this.insertObject.bathrooms = this.insertObject.bathrooms.filter((x:any) => x !== item);
        break;
      case 'garage':
        this.insertObject.garages = this.insertObject.garages.filter((x:any) => x !== item);
        break;
      case 'pool':
        this.insertObject.pools = this.insertObject.pools.filter((x:any) => x !== item);
        break;
      default:
        console.error(`Unknown type: ${type}`);
    }
  }
}