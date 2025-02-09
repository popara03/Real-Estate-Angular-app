import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../../../../interface/City/city';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertCityService {

  constructor(
    private http: HttpClient
  ) { }

  insert(insertObject:City) : Observable<any> {
    return this.http.post('http://localhost/ngproj/backend/city/insertCity.php', insertObject, { responseType: 'text' as 'json' })
    .pipe(
      catchError((error)=>{
        throw error;
      })
    );
  }
}
