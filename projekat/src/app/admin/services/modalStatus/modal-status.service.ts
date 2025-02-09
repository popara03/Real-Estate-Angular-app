import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalStatusService {

  constructor() { }

  private showModalSource = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModalSource.asObservable();

  toggleModal() {
    this.showModalSource.next(!this.showModalSource.value);
  }
}
