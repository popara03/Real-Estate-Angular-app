import { Component, Input } from '@angular/core';
import { ManageFavoritesService } from '../../../favorites/services/manageFavorites/manage-favorites.service';

@Component({
  selector: 'app-favorites-icon',
  templateUrl: './favorites-icon.component.html',
  styleUrl: './favorites-icon.component.css'
})
export class FavoritesIconComponent {
  @Input() isLink:boolean = false;
  @Input() propertyId:number = 0;
  isPropertyInFavorites:boolean = false;
  @Input() showIndicator:boolean = false;
  indicatorValue:number = 0;

  constructor(private favoritesService:ManageFavoritesService) { }

  ngOnInit(): void {
    this.checkIfPropertyInFavorites();
    this.favoritesService.favorites$.subscribe(favorites => {
      this.indicatorValue = favorites.length;
      this.isPropertyInFavorites = favorites.includes(this.propertyId);
    });
  }

  checkIfPropertyInFavorites() {
    this.isPropertyInFavorites = this.favoritesService.get().includes(this.propertyId);
  }

  toggleFavorites() {
    if (this.isPropertyInFavorites) {
      this.favoritesService.remove(this.propertyId);
      this.isPropertyInFavorites = false;
    } else {
      this.favoritesService.add(this.propertyId);
      this.isPropertyInFavorites = true;
    }
  }
}