import { Component } from '@angular/core';
import { UrlService } from '../hosamURL/url.service';

@Component({
  selector: 'app-subscription-hosam',
  templateUrl: './subscription-hosam.component.html',
  styleUrl: './subscription-hosam.component.css'
})
export class SubscriptionHosamComponent {


  ngOnInit() {
    this.getMalik();
  }

  constructor(private _ser: UrlService) {

  }

  subscriptionArray: any
  getMalik() {
    this._ser.getSubscriptionData().subscribe((data) => {
      this.subscriptionArray = data

      console.log("this.subscriptionArray", this.subscriptionArray)
    })
  }

  data = {
    "userId": 1,
    "subscriptionId": 0,
    "subServiceId": 1
  }


  addUserSubscription(id :any) {
    this.data.subscriptionId = id
    this._ser.addUserSubscription(this.data).subscribe(() => {
      
      alert("user subscription added  successfulyy")
    })
  }
}
