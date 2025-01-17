import { Injectable, inject, signal } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, user } from '@angular/fire/auth';
import { Observable, from } from "rxjs";
import { Userinterface } from '../service/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    firebaseAuth = inject(Auth);
    user$ = user(this.firebaseAuth);
    currentUsersig = signal<Userinterface | null | undefined>(undefined);
    isAuthenticated: any;

    getUserId(): Observable<string | null> {
        return this.user$.pipe(
            map(user => user)

        );
    }

    register(
        email: string,
        username: string,
        password: string,
    ): Observable<void> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password,
        ).then((response: { user: any; }) =>
            updateProfile(response.user, { displayName: username })
        );
        return from(promise);
    }

    login(email: string, password: string): Observable<void> {
        const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => { });
        return from(promise);
    }
}
