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

  ngOnInit() {
  }

  requestQuotation() {}

}
