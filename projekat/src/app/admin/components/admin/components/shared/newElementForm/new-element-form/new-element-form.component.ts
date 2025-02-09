import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Element } from '../../../../../../../interface/element/element';
import { InsertElementService } from '../../../../../../services/element/insertElement/insert-element.service';
import { DbAlterCheckService } from '../../../../../../services/dbAlterCheck/db-alter-check.service';

@Component({
  selector: 'app-new-element-form',
  templateUrl: './new-element-form.component.html',
  styleUrl: './new-element-form.component.css'
})
export class NewElementFormComponent {

  constructor(
    private insertElement: InsertElementService,
    private dbAlterCheckService:DbAlterCheckService
  ) { }

  //newElementForm
  newElementForm = new FormGroup({
    name: new FormControl('', [Validators.required ,Validators.minLength(2)]),
  });

  //insertObject za element
  elementInsertObject : Element = {
    name : ''
  }

  //obavestenje o statusu unosa
  newElementMsg:string = '';
  newElementFailed:boolean = false;

  onNewElementSubmit() {
    if(this.newElementForm.invalid) {
      this.newElementMsg = '';
      return;
    }

    //postavljanje vrednosti za insertObject na osnovu formGroup objekta preko indexa polja
    this.elementInsertObject.name = String(this.newElementForm.value.name);

    //dodavanje novog elementa u bazu
    this.insertElement.insert(this.elementInsertObject).subscribe(
      (data)=>{
        //prikaz poruke
        this.newElementFailed = false;
        this.newElementMsg = data;

        //resetovanje forme
        this.newElementForm.reset();

        //obavestenje o promenama, radi fetch novounetih podataka
        this.dbAlterCheckService.altered();
      },
      (error) => {
        //prikaz poruke
        this.newElementFailed = true;
        this.newElementMsg = error.error;
        console.error('Error occurred:', error.error);
    });
  }
}
