import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private registerUrl = 'http://localhost:9091/api/userDetails/registerNewCustomer';
  private loginUrl = 'http://localhost:9091/api/userDetails/loginCustomer';

  constructor(
    private http: HttpClient,
  ) { }

  registerNewUser(user: any) {
    return this.http.post<any>(this.registerUrl, user);
  }
  login(auth: any) {
    return this.http.post<any>(this.loginUrl, auth);
  }



}
