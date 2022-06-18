import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSearch: boolean = true;

  constructor(
    private homeService: HomeService,
  ) {
    this.homeService.searchBoolean.subscribe((res:any) => {
        this.isSearch = res;
    });
   }

  ngOnInit(): void {

  }
  clearSearch() {
    this.homeService.searchData.next({type: 'clearSearch'});
  }
  searchMethod(eve: any) {
    console.log(eve.target.value);
    this.homeService.searchData.next({type: 'search', value: eve.target.value});
  }
}
