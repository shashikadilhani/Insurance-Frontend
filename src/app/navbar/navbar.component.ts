import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}
  ngOnInit() {}

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }

  navigateToPortal() {
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
}
