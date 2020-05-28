import { Component } from '@angular/core';
import { products } from '../products';
import { ProductAlertsComponent  } from '../product-alerts/product-alerts.component';
import { CartService } from '../cart.service';
@Component({

    selector:'app-product-list',
    templateUrl:'./products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductListComponent {
    products=products;
    product;
    constructor(
        
        private cartService:CartService
      ) { }
    share()
    {
        window.alert('The product has been shared');
    }
    addToCart(product){
        this.cartService.addToCart(product);
       // window.alert('Your Product has been added to the cart.')
    }
    onNotify()
    {
        window.alert('You will be notified when the product goes on sale');
    }
}