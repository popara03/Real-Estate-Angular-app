import { Component } from '@angular/core';
import { PropertyInsertObjectBuilderService } from '../../services/propertyInsertObjectBuilder/property-insert-object-builder.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pool } from '../../../../../../../interface/pool/pool';
import { ModalStatusService } from '../../../../../../services/modalStatus/modal-status.service';

@Component({
  selector: 'app-pool-modal',
  templateUrl: './pool-modal.component.html',
  styleUrl: './pool-modal.component.css'
})
export class PoolModalComponent {
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

    const insertObject : Pool = {
      area:Number(this.modalForm.value.area)
    };
    
    //dodavanje novog bedroom objekta u insertObject
    this.propertyInsertObjectService.updatePools(insertObject);

    //obavestenje o statusu unosa
    this.msg = 'Successfully added. Add more or continue to the next step.';

    //resetovanje forme
    this.modalForm.reset();
  }
}
