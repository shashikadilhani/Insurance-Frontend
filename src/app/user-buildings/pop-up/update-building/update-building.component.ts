import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-update-building',
  templateUrl: './update-building.component.html',
  styleUrls: ['./update-building.component.css']
})
export class UpdateBuildingComponent implements OnInit {

  @Input() building_ID;

  estValue = new FormControl('', {});
  address = new FormControl('', {});
  type = new FormControl('', {});

  buildingForm: FormGroup = new FormGroup({
    estValue: this.estValue,
    address: this.address,
    type: this.type
  });

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getOne('customers/building', 'getOne', this.building_ID).subscribe(data => {
      const vehicle = data['data'][0];
      this.estValue.setValue(vehicle['estimate_Value']);
      this.address.setValue(vehicle['address']);
      this.type.setValue(vehicle['type']);
    });
  }

  onSubmit(value) {
    value.userId = this.authService.currentUser.id;
    value.id = this.building_ID;
    this.dataService.getBy('customers/building', 'update', value).subscribe(data => {
      if (data['error'] === true) {
        this.modalService.close('error');
      } else {
        this.modalService.close('success');
      }
    });
  }

}
