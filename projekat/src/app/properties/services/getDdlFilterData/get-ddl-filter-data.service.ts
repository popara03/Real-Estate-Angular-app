import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDdlFilterDataService {

  constructor(
    private http: HttpClient
  ) { }

  get(tableName: string) {
    return this.http.post(`http://localhost/ngproj/backend/SelectAll.php`, {table: tableName});
  }
}
