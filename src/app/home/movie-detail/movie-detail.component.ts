import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId = this.router.snapshot.params['id'];
  MovieDetails: any = [];
  language:any = [];
  value: any;
  details: any;
  constructor(
    private router: ActivatedRoute,
    private homeService: HomeService,
  ) {
    this.homeService.searchBoolean.next(false);
   }

  ngOnInit(): void {
   this.homeService.getMovieDetails(this.movieId).subscribe((data: any) => {
      this.MovieDetails = data;
    });
  }

}
