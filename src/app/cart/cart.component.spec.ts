/*import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from '../service/cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.isLoggedIn=false;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isLoggedIn should be false',()=>{
  let login:boolean=component.isLoggedIn;
  expect(login).toBeFalsy();
  });

  it('Debe existir un método llamado clearCart', ()=> {
    let metodoLlamado= spyOn(component,'clearCart');
    component.clearCart();
    expect(metodoLlamado).toHaveBeenCalled();
    });
}
);
*/
import { TestBed } from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing"
import { CartComponent } from "./cart.component";
import { CartService } from "../service/cart.service";
import { FoodService } from "../service/food.service";
import { TokenStorageService } from "../service/token-storage.service";

describe('CartComponent', ()=>{
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations:[CartComponent],
        }).compileComponents();
  });
  it('should create the app',()=>{
    const fixture=TestBed.createComponent(CartComponent);
    const cart=fixture.componentInstance;
    expect(cart).toBeTruthy();
  })
})