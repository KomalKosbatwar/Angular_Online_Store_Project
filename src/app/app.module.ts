import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products-list/products-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../app/cart.service';
import { CartComponent } from './cart/cart.component';
import{ HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { SearchComponent } from './search/search.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    SearchComponent
    //CartService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path :'cart',component:CartComponent},
      { path:'shipping' , component:ShippingComponent}

    ]),
    NgbPaginationModule, 
    NgbAlertModule,
    NgbModule
  ],
  entryComponents: [ProductListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
