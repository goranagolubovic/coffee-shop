import { noUndefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(item: Product): void {
    const currentItems = this.cartItemsSubject.value;
    currentItems.push(item);
    this.cartItemsSubject.next(currentItems);
  }

  viewCart(): Product[] {
    return this.cartItemsSubject.value;
  }

  removeFromCart(item: Product): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(cartItem => cartItem.title !== item.title);
    this.cartItemsSubject.next(updatedItems);
  }

  findInCart(item: Product): Product {
    const currentItems = this.cartItemsSubject.value;
    const product = currentItems.find(cartItem => cartItem.title == item.title);
    if (product)
      return product;
    return {} as Product;
  }

  updateCartItemPrice(item: Product, newPrice: string, newAmount: number): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.map(cartItem => {
      if (cartItem.title === item.title) {
        return { ...cartItem, amount: newAmount, totalPrice: newPrice };
      } else {
        return cartItem;
      }
    });

    this.cartItemsSubject.next(updatedItems);
  }
}
