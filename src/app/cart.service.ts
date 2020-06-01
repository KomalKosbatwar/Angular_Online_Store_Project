import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { products } from './products';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    products = products;
    private subject = new Subject<any>();
    private searchSubject = new Subject<any>();
    items = [];
    itemsCnt = 0;

    //newArray=[];
    constructor(
        private http: HttpClient,
    ) { }

    addToCart(product) {
        this.items.push(product);
        this.itemsCnt = this.items.length;
        this.sendMessage();
    }
    getItems() {
        return this.items;
    }
    sendMessage() {
        this.subject.next({ itemsCnt: this.itemsCnt });
    }
    getItemsCount(): Observable<any> {
        return this.subject.asObservable();

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

}


