import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  moviesData: any = [];
  searchValue: any = '';
  p: any = 1;
  count: any = 10;
  show: boolean = false;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(private homeService: HomeService) {
    this.homeService.searchBoolean.next(true);
  }

  ngOnInit(): void {
    this.getMoviesData();
    this.homeService.searchData.subscribe((res: any) => {
        this.getSearch(res.value);
    });
  }
  getMoviesData() {
    const path = 'movie/popular';
    this.homeService
      .getMethod(path)
      .pipe(take(1))
      .subscribe((res: any) => {
        console.log(res);
        this.moviesData = res.results;
      });
  }
  getSearch(res:any) {
    if(res){
      this.moviesData = [];
      this.homeService
        .searchPostMethod(res)
        .pipe(take(1))
        .subscribe((res: any) => {
          this.moviesData = res.results;
        });
    } else {
      this.moviesData();
    }
   
  }
  sortLow() {
    this.moviesData.sort((a: any, b: any) => {
      return a.vote_average - b.vote_average;
    });
  }
  sortHigh() {
    this.moviesData.sort((a: any, b: any) => {
      return b.vote_average - a.vote_average;
    });
  }
}
