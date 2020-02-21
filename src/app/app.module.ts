import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


//firebase features - and things needed
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
//components
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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
