import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionConfirmationStatusService } from '../../../../../services/actionConfirmationStatus/action-confirmation-status.service';
import { ModalStatusService } from '../../../../../services/modalStatus/modal-status.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {
  constructor(
    private modalStatus: ModalStatusService,
    private confimationStatus: ActionConfirmationStatusService,
  ) {}
  
  onConfirm() {
    this.confimationStatus.confirmAction();
  }

  onCancel() {
    this.modalStatus.toggleModal();
  }
}
