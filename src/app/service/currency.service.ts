import { Injectable } from '@angular/core';
import { Currency } from '../model/currency';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public currencyObserve: Subject<any> = new Subject()

  currencies: Array<Currency> = []

  currencyUrl: string = ''

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.currencyUrl = this.config.get('apiUrl') as string
    this.getCurrencyWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getCurrencyWithObserver() {
    this.http.get(this.currencyUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToCurrency(response)
          this.currencyObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik
        },
        (error) => {
          this.currencyObserve.error("Error in Observe")
        }
      )
  }

  jsonToCurrency(currencyArray: any): Currency[] {
    let currencies1: Array<Currency> = []
    
    for(let currency of currencyArray){
      let newCurrency = new Currency()
      newCurrency.fromObject(currency)
      currencies1.push(newCurrency)
    }    
    return currencies1
  }

  addCurrency(currency: Currency){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.currencyUrl}`, currency)
        .then(
          (response) => {
            this.getCurrencyWithObserver()
            resolve('User add')
          }
        )
    })
  }
}
