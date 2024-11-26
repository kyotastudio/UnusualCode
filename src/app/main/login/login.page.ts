import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/fb/auth.service';
import { FirestoreService } from 'src/app/fb/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  error: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private router: Router
  ) {
    this.error = '';
  }

  ngOnInit(): void {
    console.log('La pagina de inicio de sesion se ha cargado correctamente');
  }

  async loginUser() {
    try {
      this.isLoading= true;
      const userCredential = await this.authService.login(this.email, this.password);
      const uid = userCredential.user?.uid;
      const userData = await this.firestoreService.getUser(uid);
      const typeUser = userData ? userData['typeUser'] : null;
      if (typeUser === '2') {
        this.router.navigate(['/client']);
      } else if (typeUser === '3') {
        this.router.navigate(['/programmer']);
      } else {
        this.isLoading = false;
        console.error('Tipo de usuario desconocido:', typeUser);
      }
      this.isLoading= false;
    } catch (error) {
      this.isLoading = false;
      console.error('Error al iniciar sesión:', error);
      this.error = this.authService.GenerarError(error);
    }
  }
}
