import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // baseURL: string = 'http://localhost:9091'; // For Local
  baseURL: string = 'http://3.108.63.159:9091'; // For Production

  constructor(
    private http: HttpClient,
  ) { }

  registerNewUser(user: any) {
    let url = `${this.baseURL}/api/userDetails/registerNewCustomer`;
    console.log('url: registerURL', url);
    return this.http.post<any>(url, user);
  }
  login(auth: any) {
    let url = `${this.baseURL}/api/userDetails/loginCustomer`;
    console.log('url:loginURL ', url);
    return this.http.post<any>(url, auth);
  }



}
