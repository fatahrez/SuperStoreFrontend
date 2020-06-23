import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ManagerComponent } from './manager/manager.component';
import { ClerkComponent } from './clerk/clerk.component';
import { MerchantNavbarComponent } from './merchant-navbar/merchant-navbar.component';
import { MerchantManagerComponent } from './merchant-manager/merchant-manager.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'merchant', component: MerchantComponent},
  { path: 'manager', component: ManagerComponent},
  { path: 'clerk', component: ClerkComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo:"/homepage", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
