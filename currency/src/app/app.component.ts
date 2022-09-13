import {Component, OnInit} from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [AppService]
})
export class AppComponent implements OnInit{
  title = 'currency';

  inputValue = '';
  inputResultValue = 0;
  selectSecondValue = '';

  elementUSD : any;
  elementEUR : any;

  selectedFirst : string = 'UAH';
  selectedSecond : string = 'UAH';

  rates = {
    UAH: {rate: 1},
    USD: {},
    EUR: {}
  };

  USD : string = 'USD'
  EUR : string = 'EUR'

  currencies = Object.keys(this.rates);

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getRate().subscribe((response) => {
      // @ts-ignore
      this.rates.USD = response[25];
      // @ts-ignore
      this.rates.EUR = response[32];
      console.log(this.rates);

      // @ts-ignore
      this.elementUSD = (this.rates[this.USD].rate).toFixed(2);
      // @ts-ignore
      this.elementEUR = (this.rates[this.EUR].rate).toFixed(2);

    });
  }

  convertFirst(){
    // @ts-ignore
      this.inputResultValue = (this.inputValue / this.rates[this.selectedSecond].rate).toFixed(2);
  }
  convertSecond() {
      // @ts-ignore
      this.inputValue = (this.inputResultValue * this.rates[this.selectedSecond].rate).toFixed(2);
  }

}
