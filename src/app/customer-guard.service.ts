import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CustomerGuardService {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (this.auth.currentUser.type == "Customer") {
      return true;
    } else {
      this.router.navigate(["/unauthorized-access"]);
      return false;
    }
  }
}
