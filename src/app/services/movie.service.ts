import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Movie } from '../models/movie';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    baseURL: string = "https://localhost:7150/api/";

    constructor(private http: HttpClient) { }

    getMovie(apikey: string): Observable<Movie> {
        return this.http.get<Movie>(this.baseURL + "movie/" + `?auth=${apikey}`);
    }
}
