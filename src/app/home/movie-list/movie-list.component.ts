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
  p: any = 1;
  count: any = 10;
  show: boolean = false;
  apiResponse: any;
  searchQuery = '';
  timer:any = null;
  noResult = false;
  constructor(private homeService: HomeService) {
    this.homeService.searchBoolean.next(true);
  }

  ngOnInit(): void {
    this.getMoviesData();
    this.homeService.searchData.subscribe((res: any) => {
      console.log(res.value);
      if (res.value) {
        this.getSearch(res.value);
      } else {
      }
    });
  }
  getMoviesData() {
    const path = 'movie/popular';
    this.homeService
      .getMethod(path)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.apiResponse = res.results;
        this.moviesData = res.results;
      });
  }
  // getSearch(res:any) {
  //   this.moviesData = [];
  //   this.homeService
  //     .searchPostMethod(res)
  //     .pipe(take(1))
  //     .subscribe((res: any) => {
  //       this.moviesData = res.results;
  //     });
  // }
  getSearch(searchStr: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      searchStr = searchStr.trim();
      if (searchStr === '') {
        this.moviesData = this.apiResponse;
        return;
      }
      this.homeService.searchPostMethod(searchStr).pipe(take(1)).subscribe((data:any) => {
        this.noResult = false;
        if (data.total_results === 0) {
          this.moviesData = [];
          this.noResult = true;
          return;
        }
        this.moviesData = data.results;
      });
    }, 250);
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
