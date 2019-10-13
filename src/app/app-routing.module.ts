import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'json-demo', component: JsonDemoComponent },
//   { path: 'xml-demo', component: XmlDemoComponent },
//   { path: 'img-demo', component: ImgDemoComponent },
//   { path: 'test-view', component: TestViewComponent },
//   { path: 'about', component: AboutComponent },
//   { path: '**', component: PageNotFoundComponent },
// ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
