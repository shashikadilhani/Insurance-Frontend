import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PopUpBuildingClaimsComponent } from './pop-up-building-claims/pop-up-building-claims.component';

@Component({
  selector: 'app-customer-building-claims',
  templateUrl: './customer-building-claims.component.html',
  styleUrls: ['./customer-building-claims.component.css']
})
export class CustomerBuildingClaimsComponent implements OnInit {

  claimItems: any;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.get('brokers/building', `claims?id=${this.authService.currentUser.id}`).subscribe(data => {
      console.log(data);
      this.claimItems = data['data'];
    });
  }

  viewClaim(claim) {
    const modelRef = this.modalService.open(PopUpBuildingClaimsComponent);
    modelRef.componentInstance.requestData = claim;
  }

}
