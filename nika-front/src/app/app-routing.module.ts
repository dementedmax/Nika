import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbPageComponent } from './components/pages/db-page/db-page.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';
import { HistoryPageComponent } from './components/pages/history-page/history-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  { path: 'base', component: DbPageComponent },
  { path: 'order', component: OrderPageComponent },
  { path: 'history', component: HistoryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
