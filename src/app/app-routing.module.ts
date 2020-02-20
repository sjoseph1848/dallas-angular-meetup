import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemoOneComponent } from './components/demo-one/demo-one.component';
import { DemoTwoComponent } from './components/demo-two/demo-two.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'demo-one', component: DemoOneComponent
  },
  {
    path: 'demo-two', component: DemoTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
