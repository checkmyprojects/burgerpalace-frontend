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
        let cartItem= this.cart.items.find(item=>item.food.id===food.id)
        
        if(cartItem){
            this.changeQuantity(food.id, cartItem.quantity+1)
            return;
        }
        this.cart.items.push(new CartItem(food));
        
    }
    removeFromCart(foodId:Number):void{
        this.cart.items=this.cart.items.filter(item=>
            item.food.id !=foodId);
    }
    changeQuantity(foodId:number, quantity:number){
        let cartItem=this.cart.items.find(item=>item.food.id===foodId);
        if(!cartItem) return;
        cartItem.quantity = quantity;
    }
    getCart():Cart{
        return this.cart;
    }
  }