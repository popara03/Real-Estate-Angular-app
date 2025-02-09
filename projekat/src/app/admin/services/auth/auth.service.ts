import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  login(username: string, pw: string){
    const creds = {
      username: username,
      pw: pw
    };

    return this.http.post('http://localhost/ngproj/backend/auth/login.php', creds, { responseType: 'text' as 'json' })
    .pipe(
      catchError((error)=>{
        return error;
      })
    );
  }

  logout(){
    localStorage.removeItem('token');
    window.location.href = '/home';
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
