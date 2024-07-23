import { Injectable, inject, signal } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, user as firebaseUser } from '@angular/fire/auth';
import { Observable, from } from "rxjs";
import { map } from 'rxjs/operators';
import { Userinterface } from "../componentes/service/user.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private firebaseAuth = inject(Auth);
    user$ = firebaseUser(this.firebaseAuth);
    currentUsersig = signal<Userinterface | null | undefined>(undefined);
    isAuthenticated: any;

    getUserId(): Observable<string | null> {
        return this.user$.pipe(
            map(user => user )
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
        ).then(response =>
            updateProfile(response.user, { displayName: username })
        );
        return from(promise);
    }

    login(email: string, password: string): Observable<void> {
        const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => { });
        return from(promise);
    }
}