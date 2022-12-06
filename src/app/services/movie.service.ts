import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    baseURL: string = "http://localhost:4000";

    constructor(private http: HttpClient) { }

    getMovie(apikey: string): Observable<HttpResponse<any>> {
        return this.http.get<any>(this.baseURL + "/movie/" + `?auth=${apikey}`);
    }
}
