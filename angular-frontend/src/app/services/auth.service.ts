import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUri: string = 'http://localhost:9091/api';

  constructor(
    private http: HttpClient,
  ) { }

  registerNewUser(user: any) {
    let url = `${this.baseUri}/userDetails/registerNewCustomer`;
    console.log('url: registerURL', url);
    return this.http.post<any>(url, user);
  }
  login(auth: any) {
    let url = `${this.baseUri}/userDetails/loginCustomer`;
    console.log('url:loginURL ', url);
    return this.http.post<any>(url, auth);
  }



}
