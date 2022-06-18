import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 
  baseUrl: any = environment.backendApi;
  searchData = new Subject<any>();
  searchBoolean = new Subject<any>();

  constructor(
    private http: HttpClient,
  ) { }

  getMethod(path: any) {
    return this.http.get(this.baseUrl + path + `?api_key=${environment.apiKey}&language=en-US&page=1`).pipe(
      map(data => {
        // this.commonService.loadingSpinnerCall(false);
        return data;
      })
    );
  }
  getMovieDetails(dat:number) {
    return this.http.get(`${this.baseUrl}movie/${dat}?api_key=${environment.apiKey}`).pipe(
      map(data => {
        // this.commonService.loadingSpinnerCall(false);
        return data;
      })
    );
  }

  searchPostMethod(dat: any) {
    return this.http.get(`${this.baseUrl}search/movie/?api_key=${environment.apiKey}&language=en-US&page=1&include_adult=false&query=${dat}`).pipe(
      map(data => {
        // this.commonService.loadingSpinnerCall(false);
        return data;
      })
    );
  }
  patchMethod(path: any, dat: any) {
    return this.http.patch(this.baseUrl + path, dat).pipe(
      map(data => {
        // this.commonService.loadingSpinnerCall(false);
        return data;
      })
    );
  }
}
