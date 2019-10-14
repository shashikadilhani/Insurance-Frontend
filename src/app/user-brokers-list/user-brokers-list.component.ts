import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-user-brokers-list",
  templateUrl: "./user-brokers-list.component.html",
  styleUrls: ["./user-brokers-list.component.css"]
})
export class UserBrokersListComponent implements OnInit {
  listItems;
  endpoint = "brokers";
  city;

  constructor(private data: DataService, private auth: AuthService) {}

  ngOnInit() {
    this.city = this.auth.currentUser.city;
    console.log(this.auth.currentUser);
    this.loadData();
  }

  loadData() {
    this.data
      .getBy(this.endpoint, "city", { city: this.city })
      .subscribe(res => {
        this.listItems = res["data"];
      });
  }

  request(id: string) {
    this.data.delete(this.endpoint, id).subscribe(res => {
      this.loadData();
    });
  }
}
