import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Element } from '../../../../interface/element/element';

@Injectable({
  providedIn: 'root'
})
export class InsertElementService {

  constructor(
    private http: HttpClient
  ) { }

  insert(insertObject:Element) : Observable<any> {
    return this.http.post('http://localhost/ngproj/backend/element/insertElement.php', insertObject, { responseType: 'text' as 'json' })
    .pipe(
      catchError((error)=>{
        throw error;
      })
    );
  }
}
