import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoOneComponent } from './components/demo-one/demo-one.component';
import { HomeComponent } from './components/home/home.component';
import { DemoTwoComponent } from './components/demo-two/demo-two.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoOneComponent,
    HomeComponent,
    DemoTwoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
