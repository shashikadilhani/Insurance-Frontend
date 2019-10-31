import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-up-view-request',
  templateUrl: './pop-up-view-request.component.html',
  styleUrls: ['./pop-up-view-request.component.css']
})
export class PopUpViewRequestComponent implements OnInit {

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
  }

  calculateQuotation() {
    this.modalService.close('calculate');
  }

}
