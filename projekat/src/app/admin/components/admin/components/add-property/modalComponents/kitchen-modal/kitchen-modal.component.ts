import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbAlterCheckService } from '../../../../../../services/dbAlterCheck/db-alter-check.service';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Kitchen } from '../../../../../../../interface/Kitchen/kitchen';
import { PropertyInsertObjectBuilderService } from '../../services/propertyInsertObjectBuilder/property-insert-object-builder.service';
import { ModalStatusService } from '../../../../../../services/modalStatus/modal-status.service';

@Component({
  selector: 'app-kitchen-modal',
  templateUrl: './kitchen-modal.component.html',
  styleUrl: './kitchen-modal.component.css'
})
export class KitchenModalComponent {
  constructor(
    private modalStatusService:ModalStatusService,
    private http: HttpClient,
    private dbAlterCheckService:DbAlterCheckService,
    private propertyInsertObjectService:PropertyInsertObjectBuilderService
  ) { }

  toggleModal() {
    this.modalStatusService.toggleModal();
  }

  //elementi za cb listu
  elements: any[] = [];

  ngOnInit() {
    //popunjavanje elements liste
    this.http.post(`http://localhost/ngproj/backend/selectAll.php`, {table: 'element'}).subscribe((data: any) => {
      this.elements = data;
    });

    //subskripcija na promene u bazi
    this.dbAlterCheckService.dbChanged$.subscribe(changed => {
      if(changed){
        //azuriranje liste elemenata za cb
        this.http.post(`http://localhost/ngproj/backend/selectAll.php`, {table: 'element'}).subscribe((data: any) => {
          this.elements = data;
        });
      }
    });
  }

  //kitchenForm
  kitchenForm = new FormGroup({
    area: new FormControl('', [Validators.required, Validators.min(1)]),
    elements: new FormArray([], this.requireCheckboxToBeCheckedValidator(1))
  });

  //validator za elements FormArray
  requireCheckboxToBeCheckedValidator(minRequired = 1): ValidatorFn {
    return function validate(formArray: AbstractControl): ValidationErrors | null {
      const checkedCount = formArray.value
        .map((v: any) => v)
        .reduce((prev: number, next: boolean) => next ? prev + 1 : prev, 0);
      return checkedCount >= minRequired ? null : { required: true };
    };
  }

  //getter za FormArray
  get elementsFormArray() {
    return this.kitchenForm.get('elements') as FormArray;
  }

  //f-ja za dodavanje/brisanje elemenata elementsFormArray
  onCheckboxChange(e: any) {
    if (e.checked) {
      this.elementsFormArray.push(new FormControl({id: e.source.value, name: e.source._labelElement.nativeElement.innerText}));
    } else {
      const index = this.elementsFormArray.controls.findIndex(x => x.value === e.source.value);
      this.elementsFormArray.removeAt(index);
    }

    //touch elemenata, da bi se prikazala poruka o gresci u slucaju da nije nista selektovano
    this.elementsFormArray.markAsTouched();
  }
  
  //obavestenje o statusu unosa
  msg:string = '';
  failed:boolean = false;

  //submit forme za bedroom
  onSubmit() {
    //touch elemenata, da bi se prikazala poruka o gresci u slucaju da nije nista selektovano
    this.elementsFormArray.markAsTouched();

    if(!this.kitchenForm.valid){
      this.msg = '';
      return;
    }
    
    const kitchen : Kitchen = {
      area: Number(this.kitchenForm.value.area),
      elements: this.elementsFormArray.value
    };

    //dodavanje novog bedroom objekta u insertObject
    this.propertyInsertObjectService.updateKitchens(kitchen);

    //obavestenje o statusu unosa
    this.msg = 'Successfully added. Add more or continue to the next step.';

    //resetovanje forme
    this.kitchenForm.reset();
    this.elementsFormArray.clear();
    //vizuelno resetovanje elements cb liste
    this.dbAlterCheckService.altered();
  }
}
