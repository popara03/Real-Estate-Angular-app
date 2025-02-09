import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FavoritesIconComponent } from './components/favorites-icon/favorites-icon.component';
import { PropertyDetailsCardComponent } from './components/property-details-card/property-details-card.component';

@NgModule({
  declarations: [
    PropertyCardComponent,
    BtnComponent,
    FavoritesIconComponent,
    PropertyDetailsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    PropertyCardComponent,
    BtnComponent,
    FavoritesIconComponent,
    PropertyDetailsCardComponent
  ]
})
export class SharedModule { }
