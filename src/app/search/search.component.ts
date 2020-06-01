import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private cartService:CartService) { }

  ngOnInit() {
  }
  onSearchChange(searchValue: string): void 
  {
    this.cartService.searchItems(searchValue);
  }
}
