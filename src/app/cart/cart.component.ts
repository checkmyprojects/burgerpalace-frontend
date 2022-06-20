import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cartItem';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../service/token-storage.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart:Cart[]=[];
  cartItem: CartItem[] = [];
  totalValue:number= 0;
  isLoggedIn = false;
  username?: string;

  isCheckout: boolean = false;

  constructor(private cartService:CartService, private foodService:FoodService, private tokenStorageService: TokenStorageService) { }
  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.username = user.username;
    }

    //this.cartService.localStorageGetCart();
    this.getCartItems();
    this.getTotalPrice();
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
  checkout2():void{
    this.isCheckout = true;
    console.log(this.isCheckout);
    this.clearCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.getCartItems();
    this.getTotalPrice();
    console.log(this.totalValue);
  }

  checkout(): void{
    console.log(this.cartItem);
    console.log("Cart Component before Service Call");
    this.foodService.checkout(this.cartItem).subscribe({
      next: (response: CartItem[]) => {
        this.isCheckout = true;
        this.clearCart();
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
  // console.log(JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]'));
  //this.cart = JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]').items;
  //this.cartItem = JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]').items;
  if(JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]').items){
    this.cartItem = JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]').items;
  }
  // console.log(this.cartItem);
  // console.log("Function")
  // console.log(this.cartItem.length)
  // //console.log(this.cart);
}
 public getTotalPrice(){
   let totalPrice=0;
   if (this.cartItem){
     this.cartItem.forEach(function (curr){
       totalPrice += (curr.food.price*curr.quantity);
     })
   }
   this.totalValue=totalPrice;
   console.log(this.totalValue);
//return totalPrice;
 }
}
