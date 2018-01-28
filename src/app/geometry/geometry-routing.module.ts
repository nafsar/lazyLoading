import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeometryDemoComponent } from './geometry-demo/geometry-demo.component';
const routes: Routes = [
  {
    path: '',
    component: GeometryDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeometryRoutingModule { }
