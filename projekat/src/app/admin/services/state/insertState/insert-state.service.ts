import { Injectable } from '@angular/core';
import { State } from '../../../../interface/state/state';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertStateService {

  constructor(
    private http: HttpClient
  ) { }

  insert(insertObject:State) : Observable<any> {
    return this.http.post('http://localhost/ngproj/backend/state/insertState.php', insertObject, { responseType: 'text' as 'json' })
    .pipe(
      catchError((error)=>{
        throw error;
      })
    );
  }
}
