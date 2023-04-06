import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PipelineComponent } from './component/pipeline/pipeline.component';
import { SalesRoutingModule } from './sales-routing.module';
@NgModule({
  declarations: [
    PipelineComponent
  ],

  imports: [
    SalesRoutingModule,
    SharedModule,
  ],

})

export class SalesModule { }
