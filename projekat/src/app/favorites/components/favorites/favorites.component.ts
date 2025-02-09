import { Component } from '@angular/core';
import { ManageFavoritesService } from '../../services/manageFavorites/manage-favorites.service';
import { GetPropertiesService } from '../../../properties/services/getProperties/get-properties.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  constructor(
    private favorites:ManageFavoritesService,
    private getProperties: GetPropertiesService
  ) {}

  favoritesList: any[] = [];

  properties: any[] = [];

  ngOnInit() {
    //get favorites
    this.favorites.favorites$.subscribe(favorites => this.favoritesList = favorites);

    this.getProperties.data.subscribe((data: any) => {
      //filttriranje favorita
      this.properties = data.filter((p:any) => this.favoritesList.includes(p['property_id']));
    });
  }
}