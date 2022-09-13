import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getRate() {
    return this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  }

}
