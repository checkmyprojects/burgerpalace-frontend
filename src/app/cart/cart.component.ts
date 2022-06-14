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
  cart! : Cart;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart;
  }
}
