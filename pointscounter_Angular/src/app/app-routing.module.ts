import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from 'src/app/views/home/home.component';
import {UserslearnmoreComponent} from 'src/app/views/userslearnmore/userslearnmore.component';
import {MerchantshomeComponent} from 'src/app/views/merchantshome/merchantshome.component';
import {OrderComponent} from 'src/app/views/order/order.component';
import {ContactComponent} from 'src/app/views/contact/contact.component';
import {DiscoverComponent} from 'src/app/views/discover/discover.component';
import {RewardsComponent} from 'src/app/views/rewards/rewards.component';
const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch: 'full'},
  {path:'user-home', component: UserslearnmoreComponent, pathMatch:'full'},
  {path:'merchants-home', component:MerchantshomeComponent, pathMatch:'full'},
  {path:'order', component: OrderComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'},
  {path: 'discover', component:DiscoverComponent, pathMatch: 'full'},
  {path: 'rewards', component: RewardsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
