import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { MessagesComponent } from './components/admin/components/messages/messages.component';
import { LoginComponent } from './components/login/login.component';
import { PropertiesComponent } from './components/admin/components/properties/properties.component';
import { AddPropertyComponent } from './components/admin/components/add-property/add-property.component';
import { StateModalComponent } from './components/admin/components/add-property/modalComponents/state-modal/state-modal.component';
import { CityModalComponent } from './components/admin/components/add-property/modalComponents/city-modal/city-modal.component';
import { BedroomModalComponent } from './components/admin/components/add-property/modalComponents/bedroom-modal/bedroom-modal.component';
import { KitchenModalComponent } from './components/admin/components/add-property/modalComponents/kitchen-modal/kitchen-modal.component';
import { GarageModalComponent } from './components/admin/components/add-property/modalComponents/garage-modal/garage-modal.component';
import { PoolModalComponent } from './components/admin/components/add-property/modalComponents/pool-modal/pool-modal.component';
import { BathroomModalComponent } from './components/admin/components/add-property/modalComponents/bathroom-modal/bathroom-modal.component';
import { ElementsComponent } from './components/admin/components/elements/elements.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'add-property',
        component: AddPropertyComponent,
        outlet: 'admin-outlet',
        children: [
          {
            path: 'state',
            component: StateModalComponent,
            outlet: 'modal'
          },
          {
            path: 'city',
            component: CityModalComponent,
            outlet: 'modal'
          },
          {
            path: 'bedrooms',
            component: BedroomModalComponent,
            outlet: 'modal'
          },
          {
            path: 'kitchens',
            component: KitchenModalComponent,
            outlet: 'modal'
          },
          {
            path: 'bathrooms',
            component:BathroomModalComponent,
            outlet:'modal'
          },
          {
            path: 'garages',
            component: GarageModalComponent,
            outlet: 'modal'
          },
          {
            path: 'pools',
            component: PoolModalComponent,
            outlet: 'modal'
          }
        ]
      },
      {
        path: 'messages',
        component: MessagesComponent,
        outlet: 'admin-outlet'
      },
      {
        path: 'properties',
        component: PropertiesComponent,
        outlet: 'admin-outlet'
      },
      {
        path: 'edit-property/:id',
        component: AddPropertyComponent,
        outlet: 'admin-outlet',
        children: [
          {
            path: 'state',
            component: StateModalComponent,
            outlet: 'modal'
          },
          {
            path: 'city',
            component: CityModalComponent,
            outlet: 'modal'
          },
          {
            path: 'bedrooms',
            component: BedroomModalComponent,
            outlet: 'modal'
          },
          {
            path: 'kitchens',
            component: KitchenModalComponent,
            outlet: 'modal'
          },
          {
            path: 'bathrooms',
            component:BathroomModalComponent,
            outlet:'modal'
          },
          {
            path: 'garages',
            component: GarageModalComponent,
            outlet: 'modal'
          },
          {
            path: 'pools',
            component: PoolModalComponent,
            outlet: 'modal'
          }
        ]
      },
      {
        path: 'elements',
        component: ElementsComponent,
        outlet: 'admin-outlet'
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
