import { Component } from '@angular/core';
import { UrlService } from '../../hosamURL/url.service';

@Component({
  selector: 'app-get-services-admin',
  templateUrl: './get-services-admin.component.html',
  styleUrl: './get-services-admin.component.css'
})
export class GetServicesAdminComponent {


  ngOnInit() {

    // start point of life cycle of angular
    this.getAllServicesAdmin()
  }

  constructor(private  _ser : UrlService) { }


  array : any
  getAllServicesAdmin() {
    this._ser.getServices().subscribe((data) => {

      this.array = data;
    })
  }



}
