import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  pwd: any;
  email: any;
  loading: boolean;
  error: boolean;
  invalidLogin: boolean;
  message: any;

  constructor(
    private data: DataService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {}
  navigateToPortal() {
    console.log(this.auth.currentUser);
    if (this.auth.currentUser.type === "Admin") {
      this.router.navigate(["/admin/portal"], {
        queryParams: { category: "dashboard" }
      });
    } else if (this.auth.currentUser.type === "Customer") {
      this.router.navigate(["/customer/portal"], {
        queryParams: { category: "dashboard" }
      });
    } else if (this.auth.currentUser.type === "Broker") {
      this.router.navigate(["/broker/portal"], {
        queryParams: { category: "dashboard" }
      });
    }
  }
  onSubmit() {
    const signInDetails = {
      password: this.pwd,
      email: this.email
    };

    this.loading = true;
    this.auth.signIn(signInDetails).subscribe(
      res => {
        this.loading = false;
        let response = JSON.stringify(res);
        let token = JSON.parse(response).token;
        // console.log(res);
        // console.log(token);
        localStorage.setItem("token", token);
        this.navigateToPortal();
      },
      error => {
        this.loading = false;
        if (error["status"] === 400) {
          this.invalidLogin = true;
          this.message = error["error"];
        } else {
          this.invalidLogin = true;
          this.message = "Server error!. Please contact admin.";
        }
      }
    );

    this.pwd = "";

    this.email = "";
  }
}
