import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cartItem';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart:Cart[]=[];
  cartItem: CartItem[] = [];

  constructor(private cartService:CartService, private foodService:FoodService) { }
  
  ngOnInit(): void {
    this.cartService.localStorageGetCart();
    this.getCartItems();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }
  clearCart(){
    this.cartItem=[];
    this.cart=[];
    this.cartService.localStorageClear();
    console.log(this.cart.length);
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  checkout(): void{
    console.log(this.cartItem);
    console.log("Cart Component before Service Call");
    this.foodService.checkout(this.cartItem).subscribe({
      next: (response: CartItem[]) => {
        
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
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
 public getTotalPrice(){
   let totalPrice=0;
   if (this.cartItem){
     this.cartItem.forEach(function (curr){
       totalPrice += (curr.food.price*curr.quantity);
     })
   }
return totalPrice;
 }
}
