import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpVehicleClaimsComponent } from './pop-up-vehicle-claims/pop-up-vehicle-claims.component';

@Component({
  selector: 'app-customer-vehicle-claims',
  templateUrl: './customer-vehicle-claims.component.html',
  styleUrls: ['./customer-vehicle-claims.component.css']
})
export class CustomerVehicleClaimsComponent implements OnInit {

  claimItems: any;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private modalService: NgbModal,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.get('brokers/vehicle', `claims?id=${this.authService.currentUser.id}`).subscribe(data => {
      console.log(data);
      this.claimItems = data['data'];
    });
  }

  viewClaim(claim) {
    const modelRef = this.modalService.open(PopUpVehicleClaimsComponent);
    modelRef.componentInstance.requestData = claim;
  }

}
