import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUri: string = 'http://localhost:9091'; // For Local
  // baseUri: string = 'http://webapp.geniestore.com'; // For Production

  constructor(
    private http: HttpClient,
  ) { }

  registerNewUser(user: any) {
    let url = `${this.baseUri}/api/userDetails/registerNewCustomer`;
    console.log('url: registerURL', url);
    return this.http.post<any>(url, user);
  }
  login(auth: any) {
    let url = `${this.baseUri}/api/userDetails/loginCustomer`;
    console.log('url:loginURL ', url);
    return this.http.post<any>(url, auth);
  }



}
