import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';


import { HomepageComponent } from '../homepage/homepage.component';
import { MerchantComponent } from '../merchant/merchant.component';
import { ManagerComponent } from '../manager/manager.component';
import { ClerkComponent } from '../clerk/clerk.component';
import { NotFoundComponent } from '../not-found/not-found.component';


// Defining routes
const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'merchant', component: MerchantComponent},
  { path: 'manager', component: ManagerComponent},
  { path: 'clerk', component: ClerkComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/homepage", pathMatch:"full"},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class RoutingModule { }
