import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { InvoiceComponent } from './components/pages/invoice/invoice.component';
import { WishlistsComponent } from './components/pages/wishlists/wishlists.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewComponent } from './components/products/view/view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { SummaryPageComponent } from './components/pages/summary-page/summary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ProfileComponent,
    InvoiceComponent,
    WishlistsComponent,
    ProductsComponent,
    ViewComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeComponent,
    SummaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
