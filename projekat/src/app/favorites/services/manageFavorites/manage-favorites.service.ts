import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageFavoritesService {

  constructor() { }
  
  private favorites = new BehaviorSubject<number[]>(this.get());
  favorites$ = this.favorites.asObservable();

  get(): number[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  add(propertyId: number) {
    const currentFavorites = this.get();
    if (!currentFavorites.includes(propertyId)) {
      currentFavorites.push(propertyId);
      this.update(currentFavorites);
    }
  }

  remove(propertyId: number) {
    let currentFavorites = this.get();
    currentFavorites = currentFavorites.filter(id => id !== propertyId);
    this.update(currentFavorites);
  }

  update(favorites: number[]) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.favorites.next(favorites);  // emituje novu vrednost
  }
}
