import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './component/activities/activities.component';
import { DealsComponent } from './component/deals/deals.component';
import { StaticComponent } from './component/static/static.component';
import { SalesComponent } from './sales.component';

const routes: Routes = [

  {
    path: '', component: SalesComponent,
    children: [
      { path: '', redirectTo: 'deals', pathMatch: 'full' },
      { path: 'deals', component: DealsComponent },
      { path: 'activitie', component: ActivitiesComponent },
      { path: 'static', component: StaticComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SalesRoutingModule { }
