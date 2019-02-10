import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username;
  password;
  email;
  flag;
  accept;
  constructor(public productService: ProductsService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["password"].value;
    var z = document.forms["myForm"]["email"].value;


  if (z == "") {
    alert("email must be filled out");
    return false;
  }else if (x == "") {
    alert("name must be filled out");
    return false;
  }else if (y == "") {
    alert("password must be filled out");
    return false;
  } else {    this.flag = this.productService.regLogin(this.username, this.password, this.email);
    this.flag.subscribe(x => {this.accept=x;
    });}

  }

  direct() {

  }
}
