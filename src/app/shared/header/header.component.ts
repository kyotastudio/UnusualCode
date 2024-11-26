import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/fb/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent  implements OnInit {
  user: any = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authState$.subscribe((userData) => {
      this.user = userData;
    });
  }

  async logout() {
    this.authService.logout();  // Cerrar sesión
    this.router.navigate(['/home']);
  }
}
