import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  @Input() vehicle_ID;

  number = new FormControl('', {});
  model = new FormControl('', {});
  type = new FormControl('', {});
  manfYear = new FormControl('', {});
  marketVal = new FormControl('', {});
  vehiUsage = new FormControl('', {});
  fuelType = new FormControl('', {});
  meta = new FormControl('', {});

  vehicleForm: FormGroup = new FormGroup({
    number: this.number,
    model: this.model,
    type: this.type,
    manfYear: this.manfYear,
    marketVal: this.marketVal,
    vehiUsage: this.vehiUsage,
    fuelType: this.fuelType,
    meta: this.meta
  });

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getOne('customers/vehicle', 'getOne', this.vehicle_ID).subscribe(data => {
      const vehicle = data['data'][0];
      this.number.setValue(vehicle['number']);
      this.model.setValue(vehicle['Model']);
      this.type.setValue(vehicle['type']);
      this.manfYear.setValue(vehicle['Mauf_Year']);
      this.marketVal.setValue(vehicle['Market_Value']);
      this.vehiUsage.setValue(vehicle['v_usage']);
      this.fuelType.setValue(vehicle['fugi_type']);
      this.meta.setValue(vehicle['meta']);
    });
  }

  onSubmit(value) {
    value.userId = this.authService.currentUser.id;
    value.vehicle_ID = this.vehicle_ID;
    this.dataService.getBy('customers/vehicle', 'update', value).subscribe(data => {
      if (data['error'] === true) {
        this.modalService.close('error');
      } else {
        this.modalService.close('success');
      }
    });
  }

}
