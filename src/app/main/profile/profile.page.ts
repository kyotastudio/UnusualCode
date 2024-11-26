import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/fb/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = {};
  constructor(private authService: AuthService,private router: Router, private location: Location) { }

  ngOnInit() {

    this.authService.authState$.subscribe((userData) => {
      this.user = userData;
      console.log('Datos completos del usuario:', this.user);
    });
  }

  goBack() {
    this.location.back();
  }
}
