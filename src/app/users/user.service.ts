import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url = '/api/v1/users';

    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url)
                .pipe(
                    tap(data => console.log('All: ' + JSON.stringify(data))), 
                    catchError(this.handleError)
                );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);

        return throwError(errorMessage);
    }
}