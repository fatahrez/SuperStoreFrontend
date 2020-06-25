import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

import { NoAuthGuardService } from './no-auth-guard.service';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuardService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NoAuthGuardService]
  }
]);

@NgModule({
  declarations: [LoginComponent],
  imports: [
    authRouting,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [
    NoAuthGuardService
  ]
})
export class AuthModule { }
