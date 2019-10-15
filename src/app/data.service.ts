import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  baseUrl: "http://localhost:3001/api";

  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post("http://localhost:3001/api/register/new", data);
  }

  getAll(endpoint: string) {
    return this.http.get(`http://localhost:3001/api/${endpoint}/getAll`);
  }

  get(endpoint: string, subroute: string) {
    return this.http.get(`http://localhost:3001/api/${endpoint}/${subroute}`);
  }

  getOne(endpoint: string, subroute: string, id) {
    return this.http.get(
      `http://localhost:3001/api/${endpoint}/${subroute}?id=${id}`
    );
  }

  getBy(endpoint: string, subroute: string, data: any) {
    return this.http.post(
      `http://localhost:3001/api/${endpoint}/${subroute}`,
      data
    );
  }

  delete(endpoint: string, id: string) {
    return this.http.get(
      `http://localhost:3001/api/${endpoint}/delete?id=${id}`
    );
  }

  approve(endpoint: string, id: string) {
    return this.http.get(
      `http://localhost:3001/api/${endpoint}/approve?id=${id}`
    );
  }
}
