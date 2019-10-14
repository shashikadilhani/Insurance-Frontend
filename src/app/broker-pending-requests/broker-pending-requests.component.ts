import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-broker-pending-requests",
  templateUrl: "./broker-pending-requests.component.html",
  styleUrls: ["./broker-pending-requests.component.css"]
})
export class BrokerPendingRequestsComponent implements OnInit {
  listItems;
  endpoint = "brokers";

  constructor(private data: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.data.get(this.endpoint, "pending").subscribe(res => {
      this.listItems = res["data"];
    });
  }

  approve(id: string) {
    this.data.approve(this.endpoint, id).subscribe(res => {
      this.loadData();
    });
  }
}
