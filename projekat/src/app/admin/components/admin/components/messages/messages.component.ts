import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DbAlterCheckService } from '../../../../services/dbAlterCheck/db-alter-check.service';
import { ActionConfirmationStatusService } from '../../../../services/actionConfirmationStatus/action-confirmation-status.service';
import { ModalStatusService } from '../../../../services/modalStatus/modal-status.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(
    private http: HttpClient,
    private modalStatus: ModalStatusService,
    private confimationStatus: ActionConfirmationStatusService,
    private dbAlter:DbAlterCheckService
  ) {}

  displayedColumns: string[] = ['name', 'email', 'message', 'time', 'delete'];
  dataSource = [];

  touchedRow:any = {
    table: "message",
    id: 0
  };
  rowInfoReciever($event:any){
    this.touchedRow = $event;
  }

  confirmationDialogOpen = false;
  confirmed = false;

  dbAltered = false;

  ngOnInit() {
    this.http.post('http://localhost/ngproj/backend/selectAll.php', {table: 'message'}).subscribe((data: any) => {
      this.dataSource = data;
    });

    this.modalStatus.showModal$.subscribe((status:any) => {
      this.confirmationDialogOpen = status;
    });

    this.confimationStatus.actionConfirmed$.subscribe((status) => {
      this.confirmed = status;

      if(this.confirmed) {
        this.http.get('http://localhost/ngproj/backend/deleteRow.php?table=' + this.touchedRow.table + '&id=' + this.touchedRow.id).subscribe(() => {
            //notify dbAlter service za refresh tabele
            this.dbAlter.altered();
            //close modal
            this.modalStatus.toggleModal();
        });
      }
    });

    this.dbAlter.dbChanged$.subscribe((status) => {
      this.dbAltered = status;

      if(this.dbAltered) {
        this.http.post('http://localhost/ngproj/backend/selectAll.php', {table: 'message'}).subscribe((data: any) => {
          this.dataSource = data;
        });
      }
    });
  }
}
