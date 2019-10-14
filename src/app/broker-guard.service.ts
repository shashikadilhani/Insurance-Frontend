import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class BrokerGuardService {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (this.auth.currentUser.type == "Broker") {
      return true;
    } else {
      this.router.navigate(["/unauthorized-access"]);
      return false;
    }
  }
}
