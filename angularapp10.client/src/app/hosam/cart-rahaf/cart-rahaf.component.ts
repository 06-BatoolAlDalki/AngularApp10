import { Component } from '@angular/core';
import { UrlService } from '../hosamURL/url.service';

@Component({
  selector: 'app-cart-rahaf',
  templateUrl: './cart-rahaf.component.html',
  styleUrl: './cart-rahaf.component.css'
})
export class CartRahafComponent {


  ngOnInit() { this.getCartITems() }

  constructor( private _ser : UrlService) { }

  array :any
  getCartITems() {
    this._ser.cartItemOber.subscribe((data) => {
      this.array = data
    })
  }



  incrementQuantity(id: any) {
    this._ser.increaseQuantity(id);
  }
}
