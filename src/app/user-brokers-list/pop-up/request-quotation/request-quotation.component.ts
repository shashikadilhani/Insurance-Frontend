import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-quotation',
  templateUrl: './request-quotation.component.html',
  styleUrls: ['./request-quotation.component.css']
})
export class RequestQuotationComponent implements OnInit {

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService,
    private toastrService: ToastrService
  ) { }

  @Input() brokerId;
  selection = 'vehicle';
  typeId;
  selectionList = [];
  typeDatas = [];

  types = [
    { name: 'Vehicle', route: 'vehicle' },
    { name: 'Building', route: 'building' }
  ];

  ngOnInit() {
    this.loadData();
  }

  selectionChanged(value) {
    this.selection = value;
    this.loadData();
  }

  loadData() {
    const id = this.authService.currentUser.id;
    console.log(this.selection);
    this.dataService.get(`customers/${this.selection}`, `get?id=${id}`).subscribe(data => {
      this.typeDatas = data['data'];
      if (this.selection === 'vehicle') {
        this.typeId = this.typeDatas[0].vehicle_ID;
      } else {
        this.typeId = this.typeDatas[0].id;
      }
    });
  }

  typeSelected(type_id) {
    this.typeId = type_id;
  }

  requestQuotation() {
    let tempObj;
    console.log(this.selection)
    if (this.selection === 'vehicle') {
      tempObj = {
        vehicle_id: this.typeId,
        customer_id: this.authService.currentUser.id,
        broker_id: this.brokerId
      };
    } else if (this.selection === 'building') {
      tempObj = {
        building_id: this.typeId,
        customer_id: this.authService.currentUser.id,
        broker_id: this.brokerId
      };
    }
    console.log(tempObj);
    this.dataService.getBy('customers', 'quotationReq', tempObj).subscribe(result => {
      if (result['error']) {
        this.toastrService.error('Some Error Occured');
      } else {
        this.modalService.close('success');
      }
    });
  }

}
