import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'filmle';
    loading: boolean = true;
    error:any;

    movie:any;

    constructor(private movieService: MovieService) { }

    public getMovie() {
        this.loading = true;
        this.error = "";

        this.movieService.getMovie("hello")
            .subscribe((data) => this.movie = {...data});
    }
}
