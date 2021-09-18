import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpperFooterComponent } from './footer/upper-footer/upper-footer.component';
import { LowerFooterComponent } from './footer/lower-footer/lower-footer.component';

import { environment } from '../environments/environment';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { SideNavComponent } from './products/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    UpperFooterComponent,
    LowerFooterComponent,
    SideNavComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
