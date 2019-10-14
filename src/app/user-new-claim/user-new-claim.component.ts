import { Component, OnInit } from "@angular/core";
import {
  FileUploadModule,
  FileUploader,
  FileUploaderOptions
} from "ng2-file-upload";
import { FileUploaderCustom } from "./customfileuploader";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-new-claim",
  templateUrl: "./user-new-claim.component.html",
  styleUrls: ["./user-new-claim.component.css"]
})
export class UserNewClaimComponent implements OnInit {
  error = false;

  public uploader: FileUploaderCustom = new FileUploaderCustom({
    url: "http://localhost:3001/api/claims/new"
  });

  constructor(private router: Router) {}

  ngOnInit() {
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
      length = this.uploader.queue.length;
    };

    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      if (status == 200) {
        const id: string = "" + JSON.parse(response).publishedAt;
        this.router.navigate(["/advert_success", id]);
      } else {
        this.error = true;
      }
    };
  }

  onSubmit(details) {
    const tags = details.title;
    this.uploader.onBuildItemForm = (item, form) => {
      form.append("title", details.title);
      form.append("description", details.description);
      form.append("institute", details.institute);
      form.append("city", details.city);
      form.append("username", details.username);
      form.append("useremail", details.useremail);
      form.append("userphonenumber", details.userphonenumber);
      form.append("tags", tags);
    };
    let uo: FileUploaderOptions = {};
    uo.headers = [
      { name: "Access-Control-Allow-Origin", value: "http://localhost:4200" }
    ];
    this.uploader.setOptions(uo);
    this.uploader.uploadAllFiles();
  }
  valid() {
    if (length === 5) {
      return true;
    }
    return false;
  }
}
