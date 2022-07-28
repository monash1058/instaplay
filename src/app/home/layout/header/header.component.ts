import { Component } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{
  isSearch: boolean = true;

  constructor(private homeService: HomeService) {
    this.homeService.searchBoolean.subscribe((res: any) => {
      this.isSearch = res;
    });
  }

  searchMethod(eve: any) {
    console.log(eve.target.value);
    this.homeService.searchData.next({ value: eve.target.value });
  }
}
