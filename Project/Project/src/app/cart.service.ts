import { Injectable } from '@angular/core';
import { ProductsService} from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = [];
  flag = 0;
  temp:any;
  tot:any;
  constructor(private ser4:ProductsService) { }
  set(val){
    console.log(val.name + "  Value Name")
    console.log(this.cart.length + " length");
    for (let i = 0; i < this.cart.length; i++) {
      if(val.name == this.cart[i].name) {
        this.cart[i].quantity += 1;
        this.flag=0;
        break;
      } else {
        this.flag++;
      }
    }
    if(this.flag === this.cart.length){
      // console.log(val.name + "   Value Name")
      var obj = {"name" : val.name,"image": val.image,"quantity":1, "price":val.price};
      this.cart.push(obj);
      this.flag=0;
    }
    if(this.cart.length===0){
    var obj = {"name" : val.name,"image": val.image,"quantity":1, "price":val.price};
    this.cart.push(obj);
  }
  }
  get() {
    return this.cart;
  }
  len(){
    this.temp=0;
    for (let i = 0; i < this.cart.length; i++) {
      this.temp+=this.cart[i].quantity;
    }
    return this.temp;
  }
  del(i) {
    this.cart.splice(i,1);
  }
  inc(i){
    this.cart[i].quantity += 1;
  }
  dec(i){
    this.cart[i].quantity -= 1;
    if(this.cart[i].quantity==0){
      this.del(i);
    }
  }
  total(){
    this.tot = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.tot+=this.cart[i].quantity*this.cart[i].price;
    }
    return this.tot;
  }
}
