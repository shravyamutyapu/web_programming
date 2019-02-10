import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
finaltotal:number;
uname: String;
address:String;
  constructor(private ser:ProductsService) {
    this.finaltotal = this.ser.getTotal();
    this.uname = this.ser.getUser();

   }
    
  ngOnInit() {
  }
  PlaceOrder(){
    alert("Order Placed Successfully")
  }

}
