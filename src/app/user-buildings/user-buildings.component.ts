import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NewBuildingComponent } from './pop-up/new-building/new-building.component';
import { UpdateBuildingComponent } from './pop-up/update-building/update-building.component';

@Component({
  selector: 'app-user-buildings',
  templateUrl: './user-buildings.component.html',
  styleUrls: ['./user-buildings.component.css']
})
export class UserBuildingsComponent implements OnInit {

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
    this.dataService.get('customers/building', `get?id=${this.authService.currentUser.id}`).subscribe(data => {
      console.log(data);
      this.listItems = data['data'];
    });
  }

  addBuilding() {
    const modalRef = this.modalService.open(NewBuildingComponent);
    modalRef.result.then(data => {
      if (data === 'success') {
        this.loadData();
        this.toastService.success("Building added successfully.");
      } else if (data === 'error') {
        this.toastService.error("Unable to add the new building.");
      }
    });
  }

  deleteBuilding(buildingId: any) {
    this.dataService.delete('customers/building', buildingId).subscribe(data => {
      if (data['error'] === false) {
        this.loadData();
      }
    });
  }

  updateBuilding(building_ID) {
    const modalRef = this.modalService.open(UpdateBuildingComponent);
    modalRef.componentInstance.building_ID = building_ID;
    modalRef.result.then(data => {
      if (data === 'success') {
        this.loadData();
        this.toastService.success("Building update successfully.");
      } else if (data === 'error') {
        this.toastService.error("Unable to update the new vehicle.");
      }
    });
  }

}
