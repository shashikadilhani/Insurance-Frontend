import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  signIn(data) {
    // console.log(data);
    return this.http.post("http://localhost:3001/api/login/user", data);
  }
  get currentUser() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem("token");

    if (!token) {
      return null;
    }
    //console.log(helper.decodeToken(token));
    return helper.decodeToken(token);
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem("token");

    if (!token) {
      return false;
    }
    let islogged = !helper.isTokenExpired(token);
    return islogged;
  }
}
