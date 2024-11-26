import { Injectable } from '@angular/core';
import { Users } from '../models/user.models';
import {
  Firestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  collectionData,
  query,
  getFirestore
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  async createUser(uid: string, userData: Users) {
    const userDocRef = doc(this.firestore, `Users/${uid}`);
    try {
      await setDoc(userDocRef, userData);
    } catch (error) {}
  }

  async getUser(uid: string) {
    const userDocRef = doc(this.firestore, `Users/${uid}`);
    const userDoc = await getDoc(userDocRef);
    return userDoc.exists() ? userDoc.data() : null;
  }








}

