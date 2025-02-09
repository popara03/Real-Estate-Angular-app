import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPropertiesService {
  
  data : any = [];
  
  constructor( private http : HttpClient) {
    this.data = this.http.get('http://localhost/ngproj/backend/property/getProperties.php');
  }
}
