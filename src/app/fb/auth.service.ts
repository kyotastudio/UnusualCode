import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { FirestoreService } from './firestore.service';
import { BehaviorSubject, map } from 'rxjs';
import { Users } from "../models/user.models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStateSubject = new BehaviorSubject<any>(null);
  authState$ = this.authStateSubject.asObservable();

  constructor(private afAuth: Auth, private firestoreService: FirestoreService) {
    onAuthStateChanged(this.afAuth, async (user) => {
      if (user) {
        const userData = await this.firestoreService.getUser(user.uid);
        const fullUserData = {
          uid: user.uid,
          email: user.email,
          ...userData,
        };
        this.authStateSubject.next(fullUserData);
      } else {
        this.authStateSubject.next(null);
      }
    });
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.afAuth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout() {
    return signOut(this.afAuth).then(() => {
      this.authStateSubject.next(null);
    });
  }

  getCurrentUser() {
    return this.authStateSubject.value;
  }

  GenerarError(tipo: any){
    let error: string = '';
    switch (tipo.code) {
      case 'auth/email-already-in-use':
        error = 'El correo electrónico ya está en uso';
        break;
      case 'auth/invalid-email':
        error = 'El correo electrónico no es válido';
        break;
      case 'auth/user-not-found':
        error = 'Usuario no encontrado';
        break;
      case 'auth/wrong-password':
        error = 'Contraseña incorrecta';
        break;
      case 'auth/network-request-failed':
        error = 'Error de red. Verifique su conexión a internet';
        break;
      case 'auth/invalid-credential':
        error = 'Credenciales inválidas';
        break;
      default:
        error = 'Error: ' + tipo.message;
    }
    return error;
  }

  private usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();

  setUsername(username: string) {
    this.usernameSubject.next(username);
  }

  isLoggedIn() {
    return this.authStateSubject.asObservable().pipe(
      map(user => !!user)  // Retorna true si user existe, false si es null
    );}
}
