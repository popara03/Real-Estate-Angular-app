import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Garage } from '../../../../../../../interface/garage/garage';
import { PropertyInsertObjectBuilderService } from '../../services/propertyInsertObjectBuilder/property-insert-object-builder.service';
import { ModalStatusService } from '../../../../../../services/modalStatus/modal-status.service';

@Component({
  selector: 'app-garage-modal',
  templateUrl: './garage-modal.component.html',
  styleUrl: './garage-modal.component.css'
})
export class GarageModalComponent {
  constructor(
    private modalStatusService:ModalStatusService,
    private propertyInsertObjectService:PropertyInsertObjectBuilderService
  ) { }

  toggleModal() {
    this.modalStatusService.toggleModal();
  }

  modalForm = new FormGroup({
    area: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  //obavestenje o statusu unosa
  msg:string = '';
  failed:boolean = false;

  onSubmit() {
    if(this.modalForm.invalid) {
      this.msg = '';
      return;
    }

    const insertObject : Garage = {
      area:Number(this.modalForm.value.area)
    };
    
    //dodavanje novog bedroom objekta u insertObject
    this.propertyInsertObjectService.updateGarages(insertObject);

    //obavestenje o statusu unosa
    this.msg = 'Successfully added. Add more or continue to the next step.';

    //resetovanje forme
    this.modalForm.reset();
  }
}
