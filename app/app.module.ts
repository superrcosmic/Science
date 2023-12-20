import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q101Component } from './q101/q101.component';
import { HomeComponent } from './home/home.component';
import { CheComponent } from './che/che.component';
import { PhyComponent } from './phy/phy.component';

@NgModule({
  declarations: [
    AppComponent,
    Q101Component,
    HomeComponent,
    CheComponent,
    PhyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
