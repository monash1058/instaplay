import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { SafePipe } from './pipes/safe-pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
