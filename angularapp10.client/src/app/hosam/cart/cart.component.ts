import { Component } from '@angular/core';
import { UrlService } from '../hosamURL/url.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  ngOnInit() { this.getcarts() }

  constructor(private _ser: UrlService) { }


  array:any
  getcarts() {
    this._ser.cartItemSubject$.subscribe((data) => { this.array = data})
  }

  increase(id: any) {
    this._ser.increase(id);
  }
}
