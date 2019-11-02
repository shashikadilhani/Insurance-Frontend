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
import { FileSelectDirective } from 'ng2-file-upload';
import { UserVehiclesComponent } from './user-vehicles/user-vehicles.component';
import { NewVehicleComponent } from './user-vehicles/pop-up/new-vehicle/new-vehicle.component';
import { UpdateVehicleComponent } from './user-vehicles/pop-up/update-vehicle/update-vehicle.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { RequestQuotationComponent } from './user-brokers-list/pop-up/request-quotation/request-quotation.component';
import { BrokerQuotationReponsesComponent } from './broker-quotation-reponses/broker-quotation-reponses.component';
import { CustomerQuotationRequestsComponent } from './customer-quotation-requests/customer-quotation-requests.component';
import { PopUpViewRequestComponent } from './customer-quotation-requests/pop-up-view-request/pop-up-view-request.component';
import { PopUpCalculatedQuotationComponent } from './customer-quotation-requests/pop-up-calculated-quotation/pop-up-calculated-quotation.component';
import { UserBuildingsComponent } from './user-buildings/user-buildings.component';
import { NewBuildingComponent } from './user-buildings/pop-up/new-building/new-building.component';
import { UpdateBuildingComponent } from './user-buildings/pop-up/update-building/update-building.component';
import { UserBuildingClaimsListComponent } from './user-building-claims-list/user-building-claims-list.component';
import { PopUpNewClaimComponent } from './user-claims-list/pop-up-new-claim/pop-up-new-claim.component';
import { PopUpViewClaimComponent } from './user-claims-list/pop-up-view-claim/pop-up-view-claim.component';
import { PopUpViewBuildingClaimComponent } from './user-building-claims-list/pop-up-view-building-claim/pop-up-view-building-claim.component';
import { PopUpNewBuildingClaimComponent } from './user-building-claims-list/pop-up-new-building-claim/pop-up-new-building-claim.component';
import { CustomerVehicleClaimsComponent } from './customer-vehicle-claims/customer-vehicle-claims.component';
import { CustomerBuildingClaimsComponent } from './customer-building-claims/customer-building-claims.component';
import { PopUpBuildingClaimsComponent } from './customer-building-claims/pop-up-building-claims/pop-up-building-claims.component';
import { PopUpVehicleClaimsComponent } from './customer-vehicle-claims/pop-up-vehicle-claims/pop-up-vehicle-claims.component';
import { BrokerQuotationRequestHistoryComponent } from './broker-quotation-request-history/broker-quotation-request-history.component';
import { PopUpViewRequestDetailComponent } from './broker-quotation-request-history/pop-up-view-request-detail/pop-up-view-request-detail.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';

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
    UserNewClaimComponent,
    FileSelectDirective,
    UserVehiclesComponent,
    NewVehicleComponent,
    UpdateVehicleComponent,
    RequestQuotationComponent,
    BrokerQuotationReponsesComponent,
    CustomerQuotationRequestsComponent,
    PopUpViewRequestComponent,
    PopUpCalculatedQuotationComponent,
    UserBuildingsComponent,
    NewBuildingComponent,
    UpdateBuildingComponent,
    UserBuildingClaimsListComponent,
    PopUpNewClaimComponent,
    PopUpViewClaimComponent,
    PopUpViewBuildingClaimComponent,
    PopUpNewBuildingClaimComponent,
    CustomerVehicleClaimsComponent,
    CustomerBuildingClaimsComponent,
    PopUpBuildingClaimsComponent,
    PopUpVehicleClaimsComponent,
    BrokerQuotationRequestHistoryComponent,
    PopUpViewRequestDetailComponent,
    CustomerHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewVehicleComponent,
    UpdateVehicleComponent,
    NewBuildingComponent,
    UpdateBuildingComponent,
    RequestQuotationComponent,
    PopUpViewRequestComponent,
    PopUpCalculatedQuotationComponent,
    PopUpNewClaimComponent,
    PopUpViewClaimComponent,
    PopUpViewBuildingClaimComponent,
    PopUpNewBuildingClaimComponent,
    PopUpBuildingClaimsComponent,
    PopUpVehicleClaimsComponent,
    PopUpViewRequestDetailComponent
  ]
})
export class AppModule {}
