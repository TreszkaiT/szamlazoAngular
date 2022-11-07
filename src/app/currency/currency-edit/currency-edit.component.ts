import { Component, Input, OnInit } from '@angular/core';
import { Currency } from '../../model/currency';
import { CurrencyService } from '../../service/currency.service';
import { UrlService } from '../../service/url.service';

@Component({
  selector: 'app-currency-edit',
  templateUrl: './currency-edit.component.html',
  styleUrls: ['./currency-edit.component.css']
})
export class CurrencyEditComponent implements OnInit {

  // @Input() currency: Currency

  lastEditedCurrency = <Currency>{}

  editedCurrency = <Currency>{}

  // currentLink: string = "/"

  constructor(private currencyService: CurrencyService, private urlService: UrlService) { 
    this.lastEditedCurrency = this.currencyService.getLastEditedCurrency()
    if(this.lastEditedCurrency !== null || Object.keys(this.lastEditedCurrency).length !== 0){
      this.currencyService.lastEditedCurrency = <Currency>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedCurrency !== null || Object.keys(this.lastEditedCurrency).length !== 0){
      this.currencyService.readCurrencyOne(true, ""+this.lastEditedCurrency.id)
        .then(
          (currencyResp) => {
            let currency1: Currency = new Currency()
            currency1.fromObject(currencyResp)
            this.editedCurrency = currency1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let currency1: Currency = new Currency()
    currency1.fromObject(form.value)
    this.editedCurrency = currency1
    this.currencyService.updateCurrency(this.editedCurrency)
  }
}
