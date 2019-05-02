import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthenticationUser } from '../model/auth-user';


@Injectable()
export class AuthenticationService {
    private urlUser = '/rest-user/api/v1/authenticate';
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    
    constructor(private http: HttpClient){
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(userLogin: AuthenticationUser) {
        let body =  JSON.stringify(userLogin);
        let options = { headers : new HttpHeaders({ 'Content-Type' : 'application/json' }) };

        return this.http.post<User>(this.urlUser, body, options)
            .pipe(
                tap(user => {
                    if (user) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        this.currentUserSubject.next(user);
                    }

                    return user;
                }), 
                catchError(this.handleError)
            );
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.clear();
        this.currentUserSubject.next(null);
    }

    private handleError(error: any) {
        console.log('post error: ', error);
        return throwError(error.statusText + ': ' + error.status) ;
    }
}