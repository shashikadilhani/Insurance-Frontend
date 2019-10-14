import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { VirtualTimeScheduler } from "rxjs";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  role: any;
  constructor(private data: DataService, private router: Router) {}
  loading = false;
  error = true;
  messege;
  fname: any;
  lname: any;
  address: any;
  nicno: any;
  pwd: any;
  phnnum: any;
  email: any;
  city: any;
  type: any;

  ngOnInit() {}

  onSubmit() {
    let registerDetails = {
      fullname: this.fname + " " + this.lname,
      address: this.address,
      nic: this.nicno,
      password: this.pwd,
      phone_num: this.phnnum,
      email: this.email,
      isActivated: false,
      role: this.type,
      city: this.city
    };

    console.log(registerDetails);

    this.data.register(registerDetails).subscribe(res => {
      if (res["error"]) {
        this.loading = false;
        this.error = true;
      } else {
        this.loading = false;
        this.router.navigate(["login"]);
      }
    });

    this.fname = "";
    this.lname = "";
    this.address = "";
    this.nicno = "";
    this.pwd = "";
    this.phnnum = "";
    this.email = "";
    this.role = "";
  }
}
