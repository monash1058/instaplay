import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [{ path: '', component: LayoutComponent,children:[
  {path:'',redirectTo:'movies'},
  {path: 'movies', component: MovieListComponent},
  {path: 'details/:id', component: MovieDetailComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
