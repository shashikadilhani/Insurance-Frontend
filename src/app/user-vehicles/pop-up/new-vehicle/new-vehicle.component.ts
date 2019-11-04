import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {

  number = new FormControl('', {});
  model = new FormControl('', {});
  type = new FormControl('', {});
  manfYear = new FormControl('', {});
  marketVal = new FormControl('', {});
  vehiUsage = new FormControl('', {});
  fuelType = new FormControl('', {});
  meta = new FormControl('', {});
  insuranceType = new FormControl('', {});

  vehicleForm: FormGroup = new FormGroup({
    number: this.number,
    model: this.model,
    type: this.type,
    manfYear: this.manfYear,
    marketVal: this.marketVal,
    vehiUsage: this.vehiUsage,
    fuelType: this.fuelType,
    meta: this.meta,
    insuranceType: this.insuranceType
  });

  vehicles = [
    {
      type: 'Car',
      make: ['a', 'b', 'c']
    }, {
      type: 'Three Wheel',
      make: ['d', 'e', 'f']
    }, {}, {}
  ];
  selectedVehicle: any;

  insuranceTypes = ['a', 'b', 'c'];

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  onSubmit(value) {
    value.userId = this.authService.currentUser.id;
    console.log(value)
    this.dataService.getBy('customers/vehicle', 'new', value).subscribe(data => {
      if (data['error'] === true) {
        this.modalService.close('error');
      } else {
        this.modalService.close('success');
      }
    });
  }

  changedType(value) {
    this.vehicles.forEach(element => {
      if (element.type === value) {
        this.selectedVehicle = element;
        return;
      }
    });
  }

}
