import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  ngOnInit() {
    this.getServices()
  }
  constructor(private _url : UrlService) {

  }

  arrayOfServises :any
  getServices() {
    this._url.getServices().subscribe((data) => {

      this.arrayOfServises = data
      console.log(this.arrayOfServises)

    })
  }
}
