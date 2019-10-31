import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PopUpNewBuildingClaimComponent } from './pop-up-new-building-claim/pop-up-new-building-claim.component';
import { PopUpViewBuildingClaimComponent } from './pop-up-view-building-claim/pop-up-view-building-claim.component';

@Component({
  selector: 'app-user-building-claims-list',
  templateUrl: './user-building-claims-list.component.html',
  styleUrls: ['./user-building-claims-list.component.css']
})
export class UserBuildingClaimsListComponent implements OnInit {
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
    this.dataService.get('customers/building', `claims?id=${this.authService.currentUser.id}`).subscribe(data => {
      console.log(data);
      this.claimItems = data['data'];
    });
  }

  newClaim() {
    const modalRef = this.modalService.open(PopUpNewBuildingClaimComponent);
    modalRef.result.then(data => {
      if (data === 'success') {
        this.loadData();
        this.toastService.success("Claim sent successfully.");
      } else if (data === 'error') {
        this.toastService.error("Unable to send the new claim.");
      }
    });
  }

  viewClaim(claim) {
    const modelRef = this.modalService.open(PopUpViewBuildingClaimComponent);
    modelRef.componentInstance.requestData = claim;
  }

  deleteClaim(claimId: number) {
    this.dataService.delete('customers/building/delete-claim', claimId).subscribe(data => {
      if (data['error'] === false) {
        this.loadData();
      }
    });
  }

}
