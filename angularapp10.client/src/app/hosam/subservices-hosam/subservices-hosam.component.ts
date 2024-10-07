import { Component } from '@angular/core';
import { UrlService } from '../hosamURL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subservices-hosam',
  templateUrl: './subservices-hosam.component.html',
  styleUrl: './subservices-hosam.component.css'
})
export class SubservicesHosamComponent {


  paramter :any
  ngOnInit() {
    this.paramter = this._route.snapshot.paramMap.get('id');
    console.log("paramter", this.paramter)
    this.getSubServices(this.paramter);
  }


  constructor(private _ser : UrlService, private _route : ActivatedRoute) {

  }
  subServicesData : any

  getSubServices(id: any) {
    this._ser.getSubServiceByServiceId(id).subscribe((data) => {
      this.subServicesData = data

      console.log("this.subServicesData", this.subServicesData)

    })
  }
}
