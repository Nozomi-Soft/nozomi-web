import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

import { User } from '../model/user';

@Injectable()
export class UserService {
    private urlUsers = '/api/v1/users';
    private urlUser = '/api/v1/user';

    currentUser: User;

    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.urlUsers)
            .pipe(tap (data => this.extractData), 
                catchError(this.handleError));
    }

    getUser(paramValue: string, paramName: string): Observable<User> {
        return this.http.get<User>(this.urlUsers + "?" + paramName + "=" + paramValue)
            .pipe(tap (data => this.extractData), 
                catchError(this.handleError));
    }

    createUser(user: User) {
        let body = JSON.stringify(user);
        let headers = new HttpHeaders({ 'Content-Type' : 'application/json' });

        return this.http.post(this.urlUser, body, { headers : headers })
            .pipe(tap (data => this.extractData), 
                catchError(this.handleError));
    }

    private handleError(error: any) {
        console.log('post error: ', error);
        return throwError(error.statusText + ': ' + error.status) ;
    }

    private extractData(data: any) {
        console.log('All: ' + JSON.stringify(data));
        return JSON.stringify(data);
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}