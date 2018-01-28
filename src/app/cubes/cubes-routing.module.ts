import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeDemoComponent } from './cube-demo/cube-demo.component';
const routes: Routes = [
  {
    path: '',
    component: CubeDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CubesRoutingModule { }
