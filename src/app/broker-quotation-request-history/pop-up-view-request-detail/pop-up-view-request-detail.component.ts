import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pop-up-view-request-detail',
  templateUrl: './pop-up-view-request-detail.component.html',
  styleUrls: ['./pop-up-view-request-detail.component.css']
})
export class PopUpViewRequestDetailComponent implements OnInit {

  @Input() requestData;
  propertyData;
  type: number;

  policy = new FormControl('', { validators: Validators.required });

  policyForm: FormGroup = new FormGroup({
    policy: this.policy
  });

  policies: any;

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const buildingId = this.requestData.building_id;
    const vehicleId = this.requestData.vehicle_id;
    if (buildingId && !vehicleId) {
      this.dataService.getOne('brokers', 'buildingQuotation', buildingId).subscribe(result => {
        this.type = 0;
        this.propertyData = result[0];
        console.log(result)
      });
    } else if (!buildingId && vehicleId) {
      this.dataService.getOne('brokers', 'vehicleQuotation', vehicleId).subscribe(result => {
        this.type = 1;
        this.propertyData = result[0];
        console.log(result)
      });
    }
    this.dataService.get(`brokers`, `getAllPolicies`).subscribe(data => {
      console.log(data)
      this.policies = data['data'];
    });
  }

  sendPolicy(requestId, policyId) {
    console.log(requestId)
    console.log(policyId)
    this.dataService.getBy('brokers', 'sendPolicy', { requestId, policyId }).subscribe(result => {
      if (!result['error']) {
        this.loadData();
        this.modalService.close('success');
      } else {
        this.toastrService.error('Policy Send Failed');
      }
    });
  }

}
