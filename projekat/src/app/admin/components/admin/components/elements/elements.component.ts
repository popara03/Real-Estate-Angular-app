import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalStatusService } from '../../../../services/modalStatus/modal-status.service';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DbAlterCheckService } from '../../../../services/dbAlterCheck/db-alter-check.service';
import { ActionConfirmationStatusService } from '../../../../services/actionConfirmationStatus/action-confirmation-status.service';
import { DeleteElementService } from '../../../../services/element/deleteElement/delete-element.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css'
})
export class ElementsComponent {
  constructor(
    private http: HttpClient,
    private modalStatus: ModalStatusService,
    private dbAlterCheckService: DbAlterCheckService,
    private confirmationDialog: ActionConfirmationStatusService,
    private deleteElementService: DeleteElementService
  ) { }

  /////////////////////////////////////////////////

  //formgroup za cb
  elementsForm = new FormGroup({
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
    return this.elementsForm.get('elements') as FormArray;
  }

  //event za checkbox promenu
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

  /////////////////////////////////////////////////

  openDialog() {
    //touch elemenata, da bi se prikazala poruka o gresci u slucaju da nije nista selektovano
    this.elementsFormArray.markAsTouched();
    if(!this.elementsForm.valid){
      this.modalStatus.toggleModal();
      return;
    }

    //otvaranje confirmation dialoga se vrsi preko btn click output eventa
  }

  /////////////////////////////////////////////////

  confirmationDialogOpen:boolean = false;
  confirmed = false;
  dbAltered = false;
  
  elements: any = [];

  ngOnInit() {
    //fetch elemenata
    this.http.post(`http://localhost/ngproj/backend/selectAll.php`, {table: 'element'}).subscribe((data: any) => {
      this.elements = data;
    });

    //modal status service za confirmation dialog
    this.modalStatus.showModal$.subscribe((status: boolean) => {
      this.confirmationDialogOpen = status;
    });

    //confirmation dialog service
    this.confirmationDialog.actionConfirmed$.subscribe((status: boolean) => {
      this.confirmed = status;
      
      if(this.confirmed){
        this.deleteElements();
      }
    });

    //refetch elemenata nakon izmene
    this.dbAlterCheckService.dbChanged$.subscribe(changed => {
      if(changed){
        this.http.post(`http://localhost/ngproj/backend/selectAll.php`, {table: 'element'}).subscribe((data: any) => {
          this.elements = data;
        });
      }
    });
  }

  /////////////////////////////////////////////////

  //poruka o statusu unosa
  sent:boolean = false;
  failed:boolean = false;

  //submit forme za bedroom
  deleteElements() {
    this.elementsFormArray.controls.forEach(e => {
      this.deleteElementService.delete(e.value.id).subscribe({
        next: (data: any) => {
          // Ovo se izvršava ako je zahtev uspešan
          this.sent = true;
          this.failed = false;

          //zatvaranje confirmation dialoga
          this.modalStatus.toggleModal();
          //resetovanje forme
          this.elementsForm.reset();
          this.elementsFormArray.clear();
          //vizuelno resetovanje elements cb liste
          this.dbAlterCheckService.altered();
        },
        error: (err) => {
          // Ovo se izvršava ako je došlo do greške
          console.error('Error:', err);
          this.sent = false;
          this.failed = true;

          //zatvaranje confirmation dialoga
          this.modalStatus.toggleModal();
        }
      });
    });
  }
}