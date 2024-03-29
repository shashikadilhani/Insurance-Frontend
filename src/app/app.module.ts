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
import { BrokerPoliciesComponent } from './broker-policies/broker-policies.component';
import { BrokerQoutationsComponent } from './broker-qoutations/broker-qoutations.component';
import { PopUpDownloadQuotationComponent } from './broker-quotation-reponses/pop-up-download-quotation/pop-up-download-quotation.component';
import { PopUpAcceptQuotationComponent } from './broker-quotation-reponses/pop-up-accept-quotation/pop-up-accept-quotation.component';
import { PopUpDownloadPolicyComponent } from './broker-quotation-reponses/pop-up-download-policy/pop-up-download-policy.component';
import { PopUpHistoryDetailsComponent } from './customer-history/pop-up-history-details/pop-up-history-details.component';
import { UserPremiumHistoryComponent } from './user-premium-history/user-premium-history.component';
import { PopUpPremiumDetailsComponent } from './user-premium-history/pop-up-premium-details/pop-up-premium-details.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

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
    FileSelectDirective,
    UserVehiclesComponent,
    NewVehicleComponent,
    UpdateVehicleComponent,
    RequestQuotationComponent,
    BrokerQuotationReponsesComponent,
    CustomerQuotationRequestsComponent,
    PopUpViewRequestComponent,
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
    CustomerHistoryComponent,
    BrokerPoliciesComponent,
    BrokerQoutationsComponent,
    PopUpDownloadQuotationComponent,
    PopUpAcceptQuotationComponent,
    PopUpDownloadPolicyComponent,
    PopUpHistoryDetailsComponent,
    UserPremiumHistoryComponent,
    PopUpPremiumDetailsComponent,
    ServicesComponent,
    AboutusComponent,
    ContactusComponent
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
    PopUpNewClaimComponent,
    PopUpViewClaimComponent,
    PopUpViewBuildingClaimComponent,
    PopUpNewBuildingClaimComponent,
    PopUpBuildingClaimsComponent,
    PopUpVehicleClaimsComponent,
    PopUpViewRequestDetailComponent,
    PopUpDownloadQuotationComponent,
    PopUpAcceptQuotationComponent,
    PopUpDownloadPolicyComponent,
    PopUpHistoryDetailsComponent,
    PopUpPremiumDetailsComponent
  ]
})
export class AppModule {}
