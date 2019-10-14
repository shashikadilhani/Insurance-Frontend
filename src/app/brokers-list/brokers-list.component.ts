import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-brokers-list",
  templateUrl: "./brokers-list.component.html",
  styleUrls: ["./brokers-list.component.css"]
})
export class BrokersListComponent implements OnInit {
  listItems;
  endpoint = "brokers";

  constructor(private data: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.data.getAll(this.endpoint).subscribe(res => {
      this.listItems = res["data"];
    });
  }

  delete(id: string) {
    this.data.delete(this.endpoint, id).subscribe(res => {
      this.loadData();
    });
  }
}
