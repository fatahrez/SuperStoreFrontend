import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ManagerComponent } from './manager/manager.component';
import { ClerkComponent } from './clerk/clerk.component';
import { MerchantManagerComponent } from './merchant-manager/merchant-manager.component';
import { LoginComponent } from './login/login.component';
import {ManagerLoginComponent} from './manager-login/manager-login.component';
import {ClerkLoginComponent} from './clerk-login/clerk-login.component';
import {ClerkSalesComponent} from './clerk-sales/clerk-sales.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'merchant', component: MerchantComponent},
  { path: 'manager', component: ManagerComponent},
  { path: 'clerk', component: ClerkComponent},
  { path: 'login', component: LoginComponent},
  { path: 'manager-login', component: ManagerLoginComponent},
  { path: 'manager-register', component: ManagerLoginComponent},
  { path: 'clerk-login', component: ClerkLoginComponent},
  { path: 'clerk-register', component: ClerkLoginComponent},
  { path: 'clerk-sales', component: ClerkSalesComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'register', component: LoginComponent},
  { path: 'merchant-manager', component: MerchantManagerComponent},
  { path: '', redirectTo:"/homepage", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
