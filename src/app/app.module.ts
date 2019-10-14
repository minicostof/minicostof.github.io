import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent, PageNotFoundComponent } from './pages';
import { FooterBarComponent, TopBarComponent } from './desktop';
import { AboutComponent, ListRefuelingsComponent } from './pages';
import { EditRefuelingsComponent } from './core/edit-refuelings/edit-refuelings.component';
import { fromEventPattern } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    FooterBarComponent,
    TopBarComponent,
    AboutComponent,
    ListRefuelingsComponent,
    EditRefuelingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
