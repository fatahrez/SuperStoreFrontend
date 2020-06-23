import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ManagerComponent } from './manager/manager.component';
import { ClerkComponent } from './clerk/clerk.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { MerchantNavbarComponent } from './merchant-navbar/merchant-navbar.component';
import { MerchantManagerComponent } from './merchant-manager/merchant-manager.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MerchantComponent,
    ManagerComponent,
    ClerkComponent,
    NotFoundComponent,
    MerchantNavbarComponent,
    MerchantManagerComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpModule,
    HttpClientModule,
    NgxWebstorageModule,
    BrowserAnimationsModule ,
    ReactiveFormsModule,
    MaterialModule,

   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
