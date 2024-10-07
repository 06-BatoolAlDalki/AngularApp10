import { Component } from '@angular/core';
import { UrlService } from '../hosamURL/url.service';

@Component({
  selector: 'app-service-hosam',
  templateUrl: './service-hosam.component.html',
  styleUrl: './service-hosam.component.css'
})
export class ServiceHosamComponent {


  ngOnInit() {
    this.getServices()

  }

  constructor(private _ser : UrlService) {

  }

  servicesArray : any // varible 
  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data
      console.log(this.servicesArray, "this.servicesArray")

    })
  }


}
