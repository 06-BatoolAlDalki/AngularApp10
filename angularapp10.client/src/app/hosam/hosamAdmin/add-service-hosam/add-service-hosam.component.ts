import { Component } from '@angular/core';
import { UrlService } from '../../hosamURL/url.service';

@Component({
  selector: 'app-add-service-hosam',
  templateUrl: './add-service-hosam.component.html',
  styleUrl: './add-service-hosam.component.css'
})
export class AddServiceHosamComponent {

  ngOnInit() { }

  constructor(private _ser : UrlService) { }

  image :any
  changeImage(event :any) {
     this.image = event.target.files[0]

  }


  addnewService(data :any) {

    var form = new FormData();

    for (let key in data) {
      form.append(key , data[key])
    }

    form.append("ServiceImage", this.image)

    this._ser.addService(form).subscribe(() => {
      alert("service added successfully")
    })






  }
}
