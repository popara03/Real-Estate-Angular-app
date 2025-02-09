import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbAlterCheckService {
  private dbChanged = new BehaviorSubject<boolean>(false);
  dbChanged$ = this.dbChanged.asObservable();

  constructor() { }

  altered(){
    this.dbChanged.next(true);

    //reset flaga nakon 1s
    setTimeout(() => {
      this.dbChanged.next(false);
    }, 1000);
  }
}
