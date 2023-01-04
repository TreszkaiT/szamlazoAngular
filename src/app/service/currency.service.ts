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

  lastEditedCurrency = <Currency>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.currencyUrl = this.config.get('apiUrl') + "/currency"                            // ez itt a server mappán belül lévő /currency.json fájl neve/helye !!!!!!!!!!
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
            resolve('Currency add')
          }
        )
    })
  }

  updateCurrency(currency: Currency){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.currencyUrl}/${currency.id}`, currency)
        .then(
          (response) => { 
            this.getCurrencyWithObserver() 
            resolve('Currency updated')
          }
        )
    })
  }

  deleteCurrency(currency: Currency){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.currencyUrl}/${currency.id}`)
        .then(
          (response) => { 
            this.getCurrencyWithObserver() 
            resolve('Currency deleted')
          }
        )
    })
  }

  readCurrencyOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.currencyUrl + "/" + id
    else urls = this.currencyUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getCurrencyWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedCurrency(){
    return this.lastEditedCurrency
  }

}
