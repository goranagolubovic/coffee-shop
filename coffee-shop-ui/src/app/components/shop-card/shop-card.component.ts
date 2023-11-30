import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShopCartService } from 'src/app/services/shop-cart/shop-cart.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private shopCartService: ShopCartService) { }

  ngOnInit(): void {
  }
  addItemToCart() {
    if (this.product !== undefined)
      this.shopCartService.addToCart(this.product);
  }
}
