import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractRoutingModule } from './abstract-routing.module';
import { AbstractDemoComponent } from './abstract-demo/abstract-demo.component';


@NgModule({
  imports: [
    CommonModule,
    AbstractRoutingModule
  ],
  declarations: [AbstractDemoComponent]
})
export class AbstractModule { }
