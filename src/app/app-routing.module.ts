import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  {
    path: 'sales', loadChildren: () => import('./sales/sales.module')
      .then(m => m.SalesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
