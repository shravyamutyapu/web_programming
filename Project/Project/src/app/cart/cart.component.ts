import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
// export class CartComponent implements OnInit {
//   cartObjArr = [];

//   constructor(private cartService: CartService) {
//     this.cartObjArr = cartService.getCartItem();
//    }

//   ngOnInit() {

//   }

// }

export class CartComponent implements OnInit {
  username: String;
  temp1: any = [];
  total: any =0;
  len:any;
  constructor(private ser2:CartService, private ser:ProductsService) {
    this.temp1 = this.ser2.get();
    this.len = this.ser2.len();
    this.total = this.ser2.total();
    this.username = this.ser.getUser();
    this.ser.total = this.total;
    console.log(this.temp1.name + "    lolol") ;
   }

  ngOnInit() {
  }
  del(i){
    this.ser2.del(i);
    this.temp1 = this.ser2.get();
    this.total = this.ser2.total();
  }
  out(){

    
  }
  increase(val){
    this.ser2.inc(val);
    this.total = this.ser2.total();
    this.temp1 = this.ser2.get();
  }
  decrease(val){
    this.ser2.dec(val);
    this.total = this.ser2.total();
    this.temp1 = this.ser2.get();
  }
}
