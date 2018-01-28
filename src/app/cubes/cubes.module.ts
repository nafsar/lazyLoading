import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CubesRoutingModule } from './cubes-routing.module';
import { CubeDemoComponent } from './cube-demo/cube-demo.component';

@NgModule({
  imports: [
    CommonModule,
    CubesRoutingModule
  ],
  declarations: [CubeDemoComponent]
})
export class CubesModule { }
