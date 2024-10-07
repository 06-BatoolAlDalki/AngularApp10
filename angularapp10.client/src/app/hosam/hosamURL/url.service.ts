import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }


  email: BehaviorSubject<string>  = new BehaviorSubject<string>("");

  emailaddress = this.email.asObservable();



  staticData = "https://localhost:7096/api"



 
  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/services/getAllServices`);
  }


  getSubServiceByServiceId(id : any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/getsubservicesbyserviceID/${id}`)
  }


  getSubscriptionData() :Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscribtion`)
  }

  addUserSubscription(data :any) :Observable<any> {
    
    return this.http.post<any>(`${this.staticData}/userSubscription`, data)
  }


  addUSer(data :any): Observable<any> {
    return this.http.post(`https://localhost:7096/api/Users` , data)
  }


  addService(data :any): Observable<any> {
   return  this.http.post(`https://localhost:7096/api/services`, data )
  }



  updateService(id :any  ,data :any): Observable<any> {
    return this.http.put(`${this.staticData}/services/updateService/${id}` , data)
  }



  loginUser(data :any):Observable<any> {
    return this.http.post<any>(`${this.staticData}/Users/lognUser`, data)
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Products`)
  }


  cartItem: any = [];
  cartITemSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.cartItem);  // اسناد قيم المنتجات ل  سله
  cartItemOber = this.cartITemSubject.asObservable(); //  ناخذ منه الداتا 

  addTocartRama(data: any) {

    var recod = this.cartItem.find((x :any) => x.productId == data.productId)
    if (recod) {
      alert("product already exist")
    }
    else {
      this.cartItem.push(data);
      this.cartITemSubject.next(this.cartItem);
    }


   
  }

  increaseQuantity(id :any) {

    var product = this.cartItem.find((x: any) => x.productId == id)

    if (product) {
      product.quantity += 1;

      this.cartITemSubject.next(this.cartItem);
    }
  }
 

  //cartItem: any = [];
  cartItemSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.cartItem);

  cartItemSubject$ = this.cartItemSubject.asObservable();


  addTocart(data: any) {

    var record = this.cartItem.find((x: any) => x.productId == data.productId)
    if (record) {
      alert("item already exist")
    }
    else {
      this.cartItem.push(data);
      this.cartItemSubject.next(this.cartItem);
    }
  }


  increase(id :any) {
    var record = this.cartItem.find((x: any) => x.productId == id)

    if (record) {
      record.quantity += 1
      this.cartItemSubject.next(this.cartItem);

    }

  }



}
