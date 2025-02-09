import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalStatusService } from '../../../../../services/modalStatus/modal-status.service';

@Component({
  selector: 'app-action-btn',
  templateUrl: './actionbtn.component.html',
  styleUrl: './actionbtn.component.css'
})
export class ActionBtnComponent {
  @Input() type: any = "";
  @Input() text: string = "";
  @Input() colorClass: string = "";
  @Input() id: number = 0;
  @Input() tableName: string = "";

  @Output() touchedRow = new EventEmitter<any>();
  touchedRowEmitter() {
    this.touchedRow.emit({table: this.tableName, id: this.id});
  }

  constructor(
    private modalStatus: ModalStatusService,
  ) {}

  onClick() {
    this.touchedRowEmitter();
    this.modalStatus.toggleModal();
  }

  //emituje podatke o redu, ali bez modal triggera
  onClickWithoutModal(){
    this.touchedRowEmitter();
  }
}
