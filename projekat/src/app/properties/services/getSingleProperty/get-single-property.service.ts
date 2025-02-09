import { Injectable } from '@angular/core';
import { GetPropertiesService } from '../getProperties/get-properties.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSinglePropertyService {

  constructor(
    private http: HttpClient

  ) {}

  property:any = {};

  byId(id: number) : Observable<any>{
    return this.http.get(`http://localhost/ngproj/backend/property/getSingleProperty.php?id=${id}`);
  }
}