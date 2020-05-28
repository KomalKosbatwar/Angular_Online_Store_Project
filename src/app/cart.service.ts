import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    private subject = new Subject<any>();
    items = [];
    itemsCnt = 0;
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

}


