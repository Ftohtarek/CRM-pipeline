import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { DealsComponent } from './component/deals/deals.component';
import { SearchNavComponent, SearchValueDirective } from './component/search-nav/search-nav.component';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { ActivitiesComponent } from './component/activities/activities.component';
import { StaticComponent } from './component/static/static.component';
@NgModule({
  declarations: [
    SalesComponent,
    DealsComponent,
    SearchNavComponent,
    CategoryNavComponent,
    SearchValueDirective,
    ActivitiesComponent,
    StaticComponent
  ],

  imports: [
    SalesRoutingModule,
    SharedModule,
  ]

})

export class SalesModule { }
