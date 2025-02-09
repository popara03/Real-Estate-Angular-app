import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbAlterCheckService } from '../../../../../../services/dbAlterCheck/db-alter-check.service';
import { InsertStateService } from '../../../../../../services/state/insertState/insert-state.service';
import { State } from '../../../../../../../interface/state/state';
import { ModalStatusService } from '../../../../../../services/modalStatus/modal-status.service';

@Component({
  selector: 'app-state-modal',
  templateUrl: './state-modal.component.html',
  styleUrl: './state-modal.component.css'
})
export class StateModalComponent {
  constructor(
    private modalStatusService:ModalStatusService,
    private insertState:InsertStateService,
    private dbAlterCheckService:DbAlterCheckService
  ) { }

  toggleModal() {
    this.modalStatusService.toggleModal();
  }

  modalForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  insertObject : State = {
    name: ''
  }

  //obavestenje o statusu unosa
  msg:string = '';
  failed:boolean = false;

  onSubmit() {
    if(this.modalForm.invalid) {
      this.msg = '';
      return;
    }

    this.insertObject.name = String(this.modalForm.value.name);
    
    this.insertState.insert(this.insertObject).subscribe(
      (data) => {
        //prikaz poruke
        this.failed = false;
        this.msg = data;

        //resetovanje forme
        this.modalForm.reset();

        //obavestenje o promenama, radi fetch novounetih podataka
        this.dbAlterCheckService.altered();
      },
      (error) => {
        //prikaz poruke
        this.failed = true;
        this.msg = error.error;
        console.log('Error occurred:', error.error);
      }
    )
  }
}
