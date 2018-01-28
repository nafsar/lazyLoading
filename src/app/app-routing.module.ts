import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'geometry',
    loadChildren: 'app/geometry/geometry.module#GeometryModule'
  },
  {

    path: 'cubes',
    loadChildren: 'app/cubes/cubes.module#CubesModule'

  },
  {

    path: 'abstract',
    loadChildren: 'app/abstract/abstract.module#AbstractModule'

  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
