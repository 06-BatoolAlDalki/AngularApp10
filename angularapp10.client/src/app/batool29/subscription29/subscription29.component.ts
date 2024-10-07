import { Component } from '@angular/core';
import { UrlService } from '../../service/url.service';

@Component({
  selector: 'app-subscription29',
  templateUrl: './subscription29.component.html',
  styleUrl: './subscription29.component.css'
})
export class Subscription29Component {


  ngOnInit() {
    this.getsubscription()
  }

  constructor(private _ser: UrlService) { }
  array: any
  getsubscription() {
    this._ser.getSubscription().subscribe((data) => {
      this.array = data

    })
  }

  data = {
    "userId": 1,
    "subscriptionId": 2,
    "subServiceId": 3
  }

  addData(num: any) {
    this.data.subscriptionId = num;
    
    this._ser.addSubscription(this.data).subscribe(() => {
      alert("aaaaaaaaaaaaaaaa")
    })
  }



  name ="batool"
}
