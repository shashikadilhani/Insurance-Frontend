import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-pop-up-vehicle-claims',
  templateUrl: './pop-up-vehicle-claims.component.html',
  styleUrls: ['./pop-up-vehicle-claims.component.css']
})
export class PopUpVehicleClaimsComponent implements OnInit {

  @Input() requestData;
  propertyData;
  type: number;
  images = [];

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    const vehicle_id = this.requestData.vehicle_id;
    console.log(this.requestData)
    this.dataService.getOne('brokers', 'vehicle/getOne', vehicle_id).subscribe(result => {
      this.propertyData = result['data'][0];
      console.log(this.requestData)
      console.log(this.propertyData)
      this.dataService.get('brokers', `vehicle/getDownloadLinks/?id=${this.requestData.id}`).subscribe(data => {
        if (data['error']) {
          this.toastrService.error('Unable to load images');
        } else {
          console.log(data)
          data['data'].forEach(element => {
            this.images.push(`http://localhost:3001/getImage/?filePath=${element.location}`);
          });
        }
      });
    });
  }

}
