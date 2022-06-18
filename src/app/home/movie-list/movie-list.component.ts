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
  constructor(private homeService: HomeService) {
    this.homeService.searchBoolean.next(true);
  }

  ngOnInit(): void {
    this.getMoviesData();
    this.homeService.searchData.subscribe((res: any) => {
      if (res.value === '') {
        this.getMoviesData();
      } else if (res.value) {
        this.searchValue = res.value;
        this.getSearch();
      }
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
        console.log(this.moviesData);
      });
  }
  getSearch() {
    this.moviesData = [];
    this.homeService
      .searchPostMethod(this.searchValue)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.moviesData = res.results;
      });
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
