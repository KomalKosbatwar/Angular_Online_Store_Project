import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
itemsCnt;
checkOutForm;
  constructor(
    private cartService:CartService,
    private form:FormBuilder
  ) { 

    this.checkOutForm=this.form.group({
      name:'',
      address:''
    })
  }

  ngOnInit() {
    this.items=this.cartService.getItems();
    this.itemsCnt=this.cartService.getItemsCount();
  }
onSubmit(customerData)
{
  this.items=this.cartService.ClearCart();
  this.checkOutForm.reset();
  window.alert('Your Order has been submitted');
}
}
