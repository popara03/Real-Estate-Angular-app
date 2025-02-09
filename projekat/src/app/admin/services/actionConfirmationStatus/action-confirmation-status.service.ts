import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionConfirmationStatusService {

  constructor() { }

  private actionConfirmed = new BehaviorSubject<boolean>(false);
  actionConfirmed$ = this.actionConfirmed.asObservable();

  confirmAction(){
    this.actionConfirmed.next(true);

    //reset flaga nakon 1s
    setTimeout(() => {
      this.actionConfirmed.next(false);
    }, 1000);
  }
}