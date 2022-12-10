import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title = 'filmle';
    loading: boolean = true;
    error:any;

    movie:any;

    constructor(private movieService: MovieService) { }

    public getMovie() {
        this.loading = true;
        this.error = "";

        this.movieService.getMovie("hello")
            .subscribe((data: Movie) => {
                this.movie = data
                this.loading = false;
            });
    }

    ngOnInit(): void {
        this.getMovie();
    }
}
