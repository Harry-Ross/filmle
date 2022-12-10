import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie';
import { MovieService } from './services/movie.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() { }
}
