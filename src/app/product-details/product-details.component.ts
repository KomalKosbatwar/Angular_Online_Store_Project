import { Component,OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router'; 
import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
    selector:'app-product-details',
    templateUrl:'./product-details.component.html'
   
})
export class ProductDetailsComponent implements OnInit {
    product;
    thumbnail: any;
    addToCart(product){
        this.cartService.addToCart(product);
        window.alert('Your Product has been added to the cart.')
    }
    constructor(
      private route: ActivatedRoute,
      private cartService:CartService
    ) { }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
          this.product = products[+params.get('productId')];
        });

        
      }
    
  }