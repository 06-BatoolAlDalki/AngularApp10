import { Component } from '@angular/core';
import { UrlService } from '../hosamURL/url.service';

@Component({
  selector: 'app-products-hosam',
  templateUrl: './products-hosam.component.html',
  styleUrl: './products-hosam.component.css'
})
export class ProductsHosamComponent {

  ngOnInit() { this.get() }

  constructor(private _ser : UrlService) { }


  array:any
  get() {
    this._ser.getAllProducts().subscribe((data) => {
      this.array = data
    })
  }

  object = {
    cartID: 0,
    productId: 0,
    userID: 0,
    quantity :0

  }

  addToCart(id: any) {



    this.object.productId = id
    this._ser.addTocartRama({ ...this.object });
  }
}
