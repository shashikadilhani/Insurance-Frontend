import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-request-quotation',
  templateUrl: './request-quotation.component.html',
  styleUrls: ['./request-quotation.component.css']
})
export class RequestQuotationComponent implements OnInit {

  constructor(
    private modalService: NgbActiveModal,
    private authService: AuthService,
    private dataService: DataService
  ) { }

  selection = 'vehicle';
  selectionList = [];

  types = [
    { name: 'Vehicle', route: 'vehicle' },
    { name: 'Building', route: 'property'}
  ];

  ngOnInit() {
    this.loadData();
  }

  requestQuotation() {}

  selectionChanged(value) {
    this.selection = value;
    this.loadData();
  }

  loadData() {
    const id = this.authService.currentUser.id;
    console.log(this.selection);
    this.dataService.get(`customers/${this.selection}`, `get?id=${id}`).subscribe(data => {
      console.log(data);
    });
  }

}
