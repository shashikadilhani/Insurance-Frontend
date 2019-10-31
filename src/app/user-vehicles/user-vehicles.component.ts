import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NewVehicleComponent } from './pop-up/new-vehicle/new-vehicle.component';
import { UpdateVehicleComponent } from './pop-up/update-vehicle/update-vehicle.component';

@Component({
  selector: 'app-user-vehicles',
  templateUrl: './user-vehicles.component.html',
  styleUrls: ['./user-vehicles.component.css']
})
export class UserVehiclesComponent implements OnInit {

  listItems: any;

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
    this.dataService.get('customers/vehicle', `get?id=${this.authService.currentUser.id}`).subscribe(data => {
      console.log(data);
      this.listItems = data['data'];
    });
  }

  addVehicle() {
    const modalRef = this.modalService.open(NewVehicleComponent);
    modalRef.result.then(data => {
      if (data === 'success') {
        this.loadData();
        this.toastService.success("Vehicle added successfully.");
      } else if (data === 'error') {
        this.toastService.error("Unable to add the new vehicle.");
      }
    });
  }

  deleteVehicle(vehicleId: any) {
    this.dataService.delete('customers/vehicle', vehicleId).subscribe(data => {
      if (data['error'] === false) {
        this.loadData();
      }
    });
  }

  updateVehicle(vehicle_ID) {
    const modalRef = this.modalService.open(UpdateVehicleComponent);
    modalRef.componentInstance.vehicle_ID = vehicle_ID;
    modalRef.result.then(data => {
      if (data === 'success') {
        this.loadData();
        this.toastService.success("Vehicle update successfully.");
      } else if (data === 'error') {
        this.toastService.error("Unable to update the new vehicle.");
      }
    });
  }
}
