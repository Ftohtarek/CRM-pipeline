import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/component/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () => import('./core/core.module')
      .then(m => m.CoreModule)
  },
  {
    path: 'sales', loadChildren: () => import('./sales/sales.module')
      .then(m => m.SalesModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
