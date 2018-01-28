import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbstractDemoComponent } from './abstract-demo/abstract-demo.component';
const routes: Routes = [
  {
    path: '',
    component: AbstractDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractRoutingModule { }
