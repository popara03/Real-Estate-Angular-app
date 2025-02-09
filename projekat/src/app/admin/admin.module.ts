import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { PropertiesComponent } from './components/admin/components/properties/properties.component';
import { LayoutModule } from '../layout/layout.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MessagesComponent } from './components/admin/components/messages/messages.component';
import { AddPropertyComponent } from './components/admin/components/add-property/add-property.component';
import { StateModalComponent } from './components/admin/components/add-property/modalComponents/state-modal/state-modal.component';
import { CityModalComponent } from './components/admin/components/add-property/modalComponents/city-modal/city-modal.component';
import { BedroomModalComponent } from './components/admin/components/add-property/modalComponents/bedroom-modal/bedroom-modal.component';
import { NewElementFormComponent } from './components/admin/components/shared/newElementForm/new-element-form/new-element-form.component';
import { KitchenModalComponent } from './components/admin/components/add-property/modalComponents/kitchen-modal/kitchen-modal.component';
import { GarageModalComponent } from './components/admin/components/add-property/modalComponents/garage-modal/garage-modal.component';
import { PoolModalComponent } from './components/admin/components/add-property/modalComponents/pool-modal/pool-modal.component';
import { BathroomModalComponent } from './components/admin/components/add-property/modalComponents/bathroom-modal/bathroom-modal.component';
import {MatTableModule} from '@angular/material/table';
import { ConfirmationDialogComponent } from './components/admin/components/shared/confirmation-dialog/confirmation-dialog.component';
import { ActionBtnComponent } from './components/admin/components/shared/actionBtn/actionbtn.component';
import { ElementsComponent } from './components/admin/components/elements/elements.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    MessagesComponent,
    PropertiesComponent,
    AddPropertyComponent,

    StateModalComponent,
    CityModalComponent,
    BedroomModalComponent,
    KitchenModalComponent,
    NewElementFormComponent,
    GarageModalComponent,
    PoolModalComponent,
    BathroomModalComponent,
    ActionBtnComponent,
    ConfirmationDialogComponent,
    ElementsComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    SharedModule,

    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckbox,
    MatSelectModule,
    MatButton,

    MatDialogModule,
    MatTableModule,
  ],
  exports: [
    AdminComponent,
    LoginComponent,
    MessagesComponent,
    PropertiesComponent,
    AddPropertyComponent,
  ]
})
export class AdminModule { }