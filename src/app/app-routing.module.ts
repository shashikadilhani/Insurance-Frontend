import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { UserPortalComponent } from "./user-portal/user-portal.component";
import { AdminPortalComponent } from "./admin-portal/admin-portal.component";
import { AdminGuardService } from "./admin-guard.service";
import { AuthGuardService } from "./auth-guard.service";
import { CustomerPortalComponent } from "./customer-portal/customer-portal.component";
import { CustomerGuardService } from "./customer-guard.service";
import { BrokerPortalComponent } from "./broker-portal/broker-portal.component";
import { BrokerGuardService } from "./broker-guard.service";
import { UnauthorizeComponent } from "./unauthorize/unauthorize.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent
  },
  { path: "customer/portal", component: UserPortalComponent },
  {
    path: "admin/portal",
    component: AdminPortalComponent,
    canActivate: [AdminGuardService, AuthGuardService]
  },
  {
    path: "admin/users",
    component: AdminUsersComponent,
    canActivate: [AdminGuardService, AuthGuardService]
  },
  {
    path: "customer/portal",
    component: CustomerPortalComponent,
    canActivate: [CustomerGuardService, AuthGuardService]
  },
  {
    path: "broker/portal",
    component: BrokerPortalComponent,
    canActivate: [BrokerGuardService, AuthGuardService]
  },
  {
    path: "unauthorized-access",
    component: UnauthorizeComponent
  },

  { path: "services", component: ServicesComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "contactus", component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
