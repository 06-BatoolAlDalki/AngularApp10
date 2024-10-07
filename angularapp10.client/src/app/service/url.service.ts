import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:7096/api";
  getServices(): Observable<any> {

    return this.http.get<any>(`${this.url}/services/getAllServices`)
  }

  getsubServices(id:any): Observable<any> {

    return this.http.get<any>(`${this.url}/SubServices/getsubservicesbyserviceID/${id}`)
  }


  getSubscription(): Observable<any> {
    return this.http.get<any>("https://localhost:7096/api/Subscription")
  }

  addSubscription(data :any): Observable<any> {
    return this.http.post<any>("https://localhost:7096/api/user_subscription", data)
  }
}
