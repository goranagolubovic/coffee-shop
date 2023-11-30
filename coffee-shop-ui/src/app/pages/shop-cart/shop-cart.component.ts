import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShopCartService } from 'src/app/services/shop-cart/shop-cart.service';
import { convertPriceToNumber } from 'src/app/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  total: number = 0;
  showPopup: boolean = false;
  showNotificationPopup: boolean = false;

  private cartItemsSubscription: Subscription = new Subscription;

  constructor(private shopCartService: ShopCartService) {
    this.products = this.shopCartService.viewCart();
  }

  ngOnInit(): void {
    this.calculateTotal();
    this.cartItemsSubscription = this.shopCartService.cartItems$.subscribe(() => {
      this.products = this.shopCartService.viewCart();
      this.calculateTotal();
    });
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
  }

  private calculateTotal(): void {
    this.total = 0;
    this.products.forEach(item => {
      this.total += convertPriceToNumber(item.totalPrice);
    });
  }

  onItemDeleted(): void {
    this.products = this.shopCartService.viewCart();
    this.calculateTotal();
  }

  openPopup() {
    this.showPopup = true;

  }

  cancelPopup() {
    this.showPopup = false;
  }

  closePopup() {
    this.showPopup = false;
    this.openNotificationPopup();

  }
  openNotificationPopup() {
    this.showNotificationPopup = true;
  }

  closeNotificationPopup() {
    this.showNotificationPopup = false;

  }
}
