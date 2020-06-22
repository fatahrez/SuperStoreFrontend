import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ManagerComponent } from './manager/manager.component';
import { ClerkComponent } from './clerk/clerk.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {RoutingModule} from './routing/routing.module';
import { MerchantNavbarComponent } from './merchant-navbar/merchant-navbar.component';
import { MerchantManagerComponent } from './merchant-manager/merchant-manager.component'

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
    MerchantManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
