import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cartItem';
import { Food } from '../model/food';

@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    public cart:Cart = new Cart();
    public addToCart(food:Food):void{
        this.localStorageGetCart();
        console.log(this.cart);
        let cartItem= this.cart.items.find(item=>item.food.id===food.id);
        if(cartItem){
            this.changeQuantity(food.id, cartItem.quantity+1)
            return;
        }
        this.cart.items.push(new CartItem(food));
        this.localStorageSaveCart();
        
    }
    public removeFromCart(foodId:Number):void{
        this.localStorageGetCart();
        this.cart.items=this.cart.items.filter(item=>
            item.food.id !=foodId);
            this.localStorageSaveCart();
            window.location.reload();
    }
    changeQuantity(foodId:number, quantity:number){
        this.localStorageGetCart();
        let cartItem=this.cart.items.find(item=>item.food.id===foodId);
        if(!cartItem) return;
        cartItem.quantity = quantity;
        this.localStorageSaveCart();
        //window.location.reload();
    }
    getCart():Cart{
        this.localStorageGetCart();
        return this.cart;
    }
    localStorageSaveCart(){
        localStorage.setItem('BurgerPalaceCart',JSON.stringify(this.cart));
    }
    localStorageGetCart(){
        if(JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]') === ''){
            return;
        }
        this.cart=JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]');
    }
    localStorageReturnCart(){
        return JSON.parse(localStorage.getItem('BurgerPalaceCart')||'[]');
    }
    localStorageClear(){
        this.cart = new Cart();
        console.log(this.cart);
        localStorage.setItem('BurgerPalaceCart',JSON.stringify(''));
        //localStorage.removeItem('BurgerPalaceCart');
    }

  }