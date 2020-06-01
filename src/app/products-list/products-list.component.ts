import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
@Component({

    selector: 'app-product-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductListComponent implements OnInit {
    subscription: Subscription;
    products;
    product;
    constructor(

        private cartService: CartService
    ) {

        this.subscription = this.cartService.getProductList().subscribe(data => {
            const { products } = data;
            this.products = products;
        }
        );
    }
    share() {
        window.alert('The product has been shared');
    }
    addToCart(product) {
        this.cartService.addToCart(product);
        // window.alert('Your Product has been added to the cart.')
    }
    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
    ngOnInit() {
        this.products = this.cartService.getAllProductList();
        // this.itemsCnt = this.cartService.getItemsCount();
    }

}