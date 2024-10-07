import { Component } from '@angular/core';
import { UrlService } from '../../hosamURL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-service-admin',
  templateUrl: './update-service-admin.component.html',
  styleUrl: './update-service-admin.component.css'
})
export class UpdateServiceAdminComponent {

  param :any
  ngOnInit() {
    this.param = this._active.snapshot.paramMap.get('id');

  }

  imageFile :any
  changeImageevent(event: any) {
    
    this.imageFile = event.target.files[0]
  }

  constructor(private _ser : UrlService , private _active : ActivatedRoute) { }

  updateServices(data: any) {

    var form = new FormData();

    for (let key in data) {
      form.append(key , data[key])
    }
    form.append("ServiceImage", this.imageFile)

    this._ser.updateService(this.param, form).subscribe((data) => { alert("service updated successfully") })

  }
}
