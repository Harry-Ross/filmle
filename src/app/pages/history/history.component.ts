import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit  {
  historyObj:Array<Movie> = [];
  loading:boolean = true;

  constructor(private movieService: MovieService) {  }

  ngOnInit(): void {
    this.loading = true;
    this.movieService.getHistory()
      .subscribe(res => {
        this.historyObj = res;
        this.loading = false;
      });
    
  }
}
