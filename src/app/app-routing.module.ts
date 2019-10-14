import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent, PageNotFoundComponent, AboutComponent, ListRefuelingsComponent } from './pages';

// const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'listRefuelings', component: ListRefuelingsComponent },
  { path: '**', component: PageNotFoundComponent },
 ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
