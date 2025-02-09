import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../admin/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private authService:AuthService) {}

  isLoggedIn: boolean = false;

  ngOnInit(){
    this.isLoggedIn = this.authService.getToken() ? true : false;
  }
}
