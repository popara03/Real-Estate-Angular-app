import { Component } from '@angular/core';
import { DbAlterCheckService } from '../../../../../../services/dbAlterCheck/db-alter-check.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsertCityService } from '../../../../../../services/city/insertCity/insert-city.service';
import { City } from '../../../../../../../interface/City/city';
import { ModalStatusService } from '../../../../../../services/modalStatus/modal-status.service';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrl: './city-modal.component.css'
})
export class CityModalComponent {
  constructor(
    private modalStatusService:ModalStatusService,
    private insertCity:InsertCityService,
    private dbAlterCheckService:DbAlterCheckService
  ) { }

  toggleModal() {
    this.modalStatusService.toggleModal();
  }

  modalForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  insertObject : City = {
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
    
    this.insertCity.insert(this.insertObject).subscribe(
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