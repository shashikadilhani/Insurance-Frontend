import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customer-quotation-requests',
  templateUrl: './customer-quotation-requests.component.html',
  styleUrls: ['./customer-quotation-requests.component.css']
})
export class CustomerQuotationRequestsComponent implements OnInit {

  listItems;

  constructor(
    private data: DataService,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const userId = this.authService.currentUser.id;
    this.data.get('brokers', `quotationRequests/?id=${userId}`).subscribe(result => {
      
      this.listItems = result;
    });
  }

  viewDetails(id: string) {
    this.data.delete('this.endpoint', id).subscribe(res => {
      this.loadData();
    });
  }

}
