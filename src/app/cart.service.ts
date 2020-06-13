import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { products } from './products';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    products = products;
    private itmCnt = new Subject<any>();
    private totalPrice = new Subject<any>();
    private getItm = new Subject<any>();
    private searchSubject = new Subject<any>();
    items = [];
    //newArray=[];
    constructor(
        private http: HttpClient,
    ) { }

    addToCart(product) {
        const { productId } = product;

        if (this.items.some(val => val.productId === product.productId)) {
            const i = this.items.map((item) => { return item.productId }).indexOf(productId);
            //  console.log("i", i);
            this.items[i].quantity = Number(this.items[i].quantity + 1);

        } else {
            this.items.push({ ...product, quantity: 1 });

        }
        this.updateCart();
    }
    updateCartQty(productId,quantity)
    {
        if (this.items.some(val => val.productId === productId)) {
            const i = this.items.map((item) => { return item.productId }).indexOf(productId);
            //  console.log("i", i);
            this.items[i].quantity = Number(quantity);

        } 
        this.updateCart();
    }
    getItems() {
        return this.items;
    }
    getTemItems() {
        return this.items;
    }
    updateCart() {
        let quantity = 0;
        this.items.map((item) => {
            //  console.log("itm",quantity,item);
            quantity = quantity + item.quantity;
            // return quantity;
        });

        this.itmCnt.next({ itemsCnt: quantity });
    }
    getTotalPrice(): Observable<any> {
        return this.totalPrice.asObservable();
    }
    getItemsCount(): Observable<any> {
        return this.itmCnt.asObservable();

    }
    getCartItems(): Observable<any> {
        return this.getItm.asObservable();
    }

    ClearCart() {
        this.items = [];
        return this.items;
    }
    getShippingPrices() {
        return this.http.get('/assets/shipping.json');
    }
    getProductList(): Observable<any> {
        return this.searchSubject.asObservable();
    }
    getAllProductList() {
        return this.products;
    }
    searchItems(searchValue) {

        const searchData = this.products.filter(
            (val) => val['name'].includes(searchValue))
        //Searched Data
        this.searchSubject.next({ products: searchData });
        // console.log(searchData)
    }
    deleteItems(productId: number) {

        // const index = this.items.indexOf({ productId })
        const i = this.items.map((item) => { return item.productId }).indexOf(productId);
        if (i !== -1) {
            this.items.splice(i, 1);
        }
        this.updateCart();
        this.getItm.next({ cartItems: this.items });

    }

}


