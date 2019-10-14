import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UserPortalComponent } from "./user-portal/user-portal.component";
import { AdminPortalComponent } from "./admin-portal/admin-portal.component";
import { BrokerPortalComponent } from "./broker-portal/broker-portal.component";
import { CustomerPortalComponent } from "./customer-portal/customer-portal.component";
import { UnauthorizeComponent } from "./unauthorize/unauthorize.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { BrokersListComponent } from "./brokers-list/brokers-list.component";
import { BrokerPendingRequestsComponent } from "./broker-pending-requests/broker-pending-requests.component";
import { UserBrokersListComponent } from './user-brokers-list/user-brokers-list.component';
import { UserClaimsListComponent } from './user-claims-list/user-claims-list.component';
import { UserNewClaimComponent } from './user-new-claim/user-new-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserPortalComponent,
    AdminPortalComponent,
    BrokerPortalComponent,
    CustomerPortalComponent,
    UnauthorizeComponent,
    AdminUsersComponent,
    BrokersListComponent,
    BrokerPendingRequestsComponent,
    UserBrokersListComponent,
    UserClaimsListComponent,
    UserNewClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
