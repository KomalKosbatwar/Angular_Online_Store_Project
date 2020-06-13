import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();
  subscription: Subscription;
  items;
  itemsCnt;
  checkOutForm;
  sum = 0;
  value;
  total=["1","2","3","4","5","6","7","8","9","10"];
  temItems;
  constructor(
    private cartService: CartService,
    private form: FormBuilder
  ) {

    this.checkOutForm = this.form.group({
      name: '',
      address: ''
    })

    this.subscription = this.cartService.getCartItems().subscribe(data => {
      const { cartItems } = data;
      this.items = cartItems;
      let getPrice = 0;
      this.sum = 0;
      for (let j = 0; j < this.items.length; j++) {
        getPrice = this.items[j].price * this.items[j].quantity;
        this.sum += getPrice;
      }
    }

    );

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.temItems = this.cartService.getTemItems();
    this.itemsCnt = this.cartService.getItemsCount();
    this.add(this.items);
  }
  onSubmit(customerData) {
    this.items = this.cartService.ClearCart();
    this.checkOutForm.reset();
    window.alert('Your Order has been submitted');
  }

  add(data) {
    this.value = data;
    let getPrice = 0;

    for (let j = 0; j < data.length; j++) {
      getPrice = this.value[j].price * this.value[j].quantity;
      this.sum += getPrice;
    }
  }


  deleteItem(message: number) {
    this.cartService.deleteItems(message);
  }
  modelChanged(event, productId) {

    this.sum=0;
    let getPrice = 0;
    for (let j = 0; j < this.items.length; j++) {
      

      getPrice = this.items[j].price * event.target.value;
      this.sum += getPrice;
    }
    this.cartService.updateCartQty(productId,event.target.value);
 }
}
