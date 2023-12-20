import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Q101Component } from './q101/q101.component';
import { CheComponent } from './che/che.component';
import { PhyComponent } from './phy/phy.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'q101',component:Q101Component},
  {path:'phy',component:PhyComponent},
  {path:'che',component:CheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
