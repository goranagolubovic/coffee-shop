import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ShopCartService } from 'src/app/services/shop-cart/shop-cart.service';
import { convertPriceToNumber, convertPriceToString } from 'src/app/util';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.css']
})
export class ShopCartItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() itemDeleted: EventEmitter<void> = new EventEmitter<void>();
  amountValues: number[] = [1, 2, 5, 10]
  pricePerKg!: number;
  @Input() itemTotalPrice!: number;
  selectedAmount: number = 1;

  private cartItemsSubscription: Subscription = new Subscription;

  constructor(private shopCartService: ShopCartService) { }

  ngOnInit(): void {
    this.pricePerKg = convertPriceToNumber(this.product.pricePerKg);
    this.shopCartService.cartItems$.subscribe(() => {
      this.selectedAmount = (this.shopCartService.findInCart(this.product)).amount;
    });
    this.calculateTotalPrice()
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
  }

  deleteItem(): void {
    this.shopCartService.removeFromCart(this.product);
    this.itemDeleted.emit();
  }

  updateItemPrice(value: number) {
    this.selectedAmount = value;
    this.calculateTotalPrice();
    this.shopCartService.updateCartItemPrice(this.product, convertPriceToString(this.itemTotalPrice), value);
  }

  private calculateTotalPrice(): void {
    this.itemTotalPrice = this.pricePerKg * this.selectedAmount;
  }
}
