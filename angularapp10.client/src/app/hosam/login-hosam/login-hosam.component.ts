import { Component } from '@angular/core';
import { UrlService } from '../hosamURL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-hosam',
  templateUrl: './login-hosam.component.html',
  styleUrl: './login-hosam.component.css'
})
export class LoginHosamComponent {


  ngOnInit() { }

  constructor(private _ser : UrlService , private _router : Router) { }

  loginNewUser(data: any) {

    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.loginUser(form).subscribe((newData) => {
      
      this._ser['email'].next(newData.email);
      if (newData.email == 'admin@gmail.com') {
        this._router.navigate(['/dashboard'])
       
      } else {
        this._router.navigate(['/hosamService'])

      }
      alert('userLogin successfully')
      
    })
  }
}
