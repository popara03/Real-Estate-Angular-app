import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './components/properties/properties.component';
import { SinglePropertyComponent } from './components/single-property/single-property.component';
import { SharedModule } from '../shared/shared.module';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FormsModule } from '@angular/forms'; //za ngModel

@NgModule({
  declarations: [
    PropertiesComponent,
    SinglePropertyComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    SharedModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class PropertiesModule { }
