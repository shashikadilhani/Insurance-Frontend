import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-unauthorize",
  templateUrl: "./unauthorize.component.html",
  styleUrls: ["./unauthorize.component.css"]
})
export class UnauthorizeComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  navigateToPortal() {
    if (this.auth.currentUser.type === "Admin") {
      this.router.navigate(["/admin/portal"]);
    } else if (this.auth.currentUser.type === "Customer") {
      this.router.navigate(["/customer/portal"]);
    } else if (this.auth.currentUser.type === "Broker") {
      this.router.navigate(["/broker/portal"]);
    }
  }
}
