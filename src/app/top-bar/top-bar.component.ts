import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls:['./top-bar.component.css']

})
export class TopBarComponent implements OnInit {
    subscription: Subscription;
    itemsCnt;
    constructor(
        private cartService: CartService,
    ) {
        this.subscription = this.cartService.getItemsCount().subscribe(data => {
            const { itemsCnt } = data;
            this.itemsCnt = itemsCnt;
        }
        );
    }

    ngOnInit() {
       // this.itemsCnt = this.cartService.getItemsCount();
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}