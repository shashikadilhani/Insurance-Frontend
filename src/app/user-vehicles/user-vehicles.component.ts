import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewVehicleComponent } from './pop-up/new-vehicle/new-vehicle.component';

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
    private modalService: NgbModal
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
    modalRef.componentInstance.name = 'World';
  }

  deleteVehicle(vehicleId: any) {
    this.dataService.delete('customers/vehicle', vehicleId).subscribe(data => {
      if (data['error'] === false) {
        this.loadData();
      }
    });
  }

  updateVehicle(vehicle_ID) { }
}
