import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-pop-up-view-building-claim',
  templateUrl: './pop-up-view-building-claim.component.html',
  styleUrls: ['./pop-up-view-building-claim.component.css']
})
export class PopUpViewBuildingClaimComponent implements OnInit {
  @Input() requestData;
  propertyData;
  type: number;

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    const building_id = this.requestData.building_id;
    this.dataService.getOne('customers', 'building/getOne', building_id).subscribe(result => {
      this.propertyData = result['data'][0];
    });
  }

}
