import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cartItem';
import { Food } from '../model/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart:Cart[]=[];
  cartItem: CartItem[] = [];

  constructor(private cartService:CartService) { }
  
  ngOnInit(): void {
    this.cartService.localStorageGetCart();
    this.getCartItems();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
  localStorageGetCart(){
    this.cart=JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]');
}
  public getCartItems(){
  console.log(JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]'));
  //this.cart = JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]').items;
  this.cartItem = JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]').items;
  console.log(this.cartItem);
  //console.log(this.cart);
}
}
