import { Injectable, inject } from '@angular/core';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore: Firestore = inject(Firestore);
  private authService = inject(AuthService);

  addUserData(data: any): Observable<void> {
    return this.authService.getUserId().pipe(
      switchMap(userId => {
        if (userId) {
          const userDocRef = doc(this.firestore, `users/${userId}`);
          return from(setDoc(userDocRef, data));
        } else {
          throw new Error('User not authenticated');
        }
      })
    );
  }

  getUserData(): Observable<any> {
    return this.authService.getUserId().pipe(
      switchMap(userId => {
        if (userId) {
          const userDocRef = doc(this.firestore, `users/${userId}`);
          return from(getDoc(userDocRef)).pipe(
            map(docSnapshot => docSnapshot.data())
          );
        } else {
          throw new Error('User not authenticated');
        }
      })
    );
  }
}
