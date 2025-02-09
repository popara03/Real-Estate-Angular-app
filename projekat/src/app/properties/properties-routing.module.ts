import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertiesComponent } from './components/properties/properties.component';
import { SinglePropertyComponent } from './components/single-property/single-property.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PropertiesComponent
  },
  {
    path: ':id',
    component: SinglePropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
