import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loadingSpinner: any = new BehaviorSubject(false);
 
  constructor() {}
  loadingSpinnerCall(val: any) {
    this.loadingSpinner.next(val);
  }
}
