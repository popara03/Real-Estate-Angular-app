import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteElementService {

  constructor(
    private http: HttpClient
  ) { }

  delete(id:number){
    return this.http.post('http://localhost/ngproj/backend/element/deleteElement.php', id).pipe(
      catchError((error)=>{
        return throwError(() => error);  // Prosleđuje grešku dalje
      })
    );
  }
}
