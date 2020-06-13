import { Component,OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router'; 
import { products } from '../products';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
@Component({
    selector:'app-product-details',
    templateUrl:'./product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  subscription: Subscription;
  currentRate = 8;
    product;
    thumbnail: any;
    addToCart(product){
        this.cartService.addToCart(product);
       // window.alert('Your Product has been added to the cart.')
    }
    constructor(
      private route: ActivatedRoute,
      private cartService:CartService
    ) { 

      this.subscription = this.cartService.getProductList().subscribe(data => {
        const { products } = data;
        this.product = products;
    }
    );
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
          this.product = products[+params.get('productId')];
        });

        
      }
    
  }