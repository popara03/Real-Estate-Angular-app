import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalStatusService } from '../../../../services/modalStatus/modal-status.service';
import { ActionConfirmationStatusService } from '../../../../services/actionConfirmationStatus/action-confirmation-status.service';
import { DbAlterCheckService } from '../../../../services/dbAlterCheck/db-alter-check.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  constructor(
    private http: HttpClient,
    private modalStatus: ModalStatusService,
    private confimationStatus: ActionConfirmationStatusService,
    private dbAlter:DbAlterCheckService,
    private router: Router
  ) {}

  displayedColumns: string[] = ['title', 'img', 'description', 'area', 'state', 'city', 'address', 'garden', 'floors', 'price', 'priceFixed', 'bedroom_count', 'kitchen_count', 'bathroom_count', 'garage_count' ,'pool_count', 'owner_phone', 'owner_email', 'edit', 'delete'];
  dataSource = [];

  touchedRow:any = {
    table: "message",
    id: 0
  };

  //filluje touchedRow sa podacima iz reda koji je korisnik kliknuo
  rowInfoReciever($event:any){
    this.touchedRow = $event;
  }

  //za editovanje redirectuje na edit-property komponentu jer je previse slozeno za modal
  editPropertyRedirect($event:any) {
    this.router.navigate(['/admin', { outlets: { 'admin-outlet': ['edit-property', $event.id] } }]);
  }

  confirmationDialogOpen = false;
  confirmed = false;

  dbAltered = false;

  ngOnInit() {
    this.http.post('http://localhost/ngproj/backend/property/getProperties.php', {table: 'message'}).subscribe((data: any) => {
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
        this.http.get('http://localhost/ngproj/backend/property/getProperties.php').subscribe((data: any) => {
          this.dataSource = data;
        });
      }
    });
  }
}
