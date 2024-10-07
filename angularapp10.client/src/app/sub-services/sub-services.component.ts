import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrl: './sub-services.component.css'
})
export class SubServicesComponent {

parameter : any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get('id')
    this.getSubservices()
  }
  constructor(private _ser :UrlService, private _route : ActivatedRoute) {

  }
  subservicesarray : any
  getSubservices() {
    this._ser.getsubServices(this.parameter).subscribe((data) => {
      this.subservicesarray = data
    })
  }
}
