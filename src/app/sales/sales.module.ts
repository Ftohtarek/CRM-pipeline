import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ActivitiesComponent } from './component/search-nav/search-nav.component';
import { DealsComponent } from './component/deals/deals.component';
import { SalesRoutingModule } from './sales-routing.module';
@NgModule({
  declarations: [
    DealsComponent,
    ActivitiesComponent,
  ],

  imports: [
    SalesRoutingModule,
    SharedModule,
  ],

})

export class SalesModule { }
