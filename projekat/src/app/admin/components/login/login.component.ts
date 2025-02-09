import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private authService: AuthService
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    pw: new FormControl('', [Validators.required])
  });

  status: string = "";
  failed: boolean = false;

  onSubmit() {
    if(this.loginForm.valid) {
      this.status = "";
      
      this.authService.login(String(this.loginForm.value.username), String(this.loginForm.value.pw))
      .subscribe(
        (response:any) => {
          if(JSON.parse(response).token){
            localStorage.setItem('token', JSON.parse(response).token);

            this.status = "Login successful. Redirecting...";
            this.failed = false;

            setTimeout(() => {
              window.location.href = "/admin";
            }, 500);
          }
          else{
            this.status = String(JSON.parse(response).error);
            this.failed = true;
          }
        },
        (error:any) => {
          console.error(error);
          this.status = String(error);
          this.failed = true;
        }
      );
    }
    else{
      this.status = "Form is not valid. Please fill in all the fields.";
      this.failed = true;
    }
  }
}