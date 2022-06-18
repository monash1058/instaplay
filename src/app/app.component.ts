import { ChangeDetectorRef, Component } from '@angular/core';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'instaplay';
  loadingSpninerHide = true;
  constructor(private homeser: HomeService, private cdRef: ChangeDetectorRef){}
  ngOnInit(): void{
    this.homeser.loadingSpinner.subscribe((data: boolean) => {
      this.loadingSpninerHide = data;
      this.cdRef.detectChanges();
    });
  }
}