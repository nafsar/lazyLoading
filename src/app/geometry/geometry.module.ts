import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeometryRoutingModule
} from './geometry-routing.module';
import { GeometryDemoComponent
} from './geometry-demo/geometry-demo.component';

@NgModule({
  imports: [
    CommonModule,
    GeometryRoutingModule
  ],
  declarations: [GeometryDemoComponent]
})
export class GeometryModule { }
