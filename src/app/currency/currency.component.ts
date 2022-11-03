import { Component, OnInit, OnDestroy } from '@angular/core';
import { Currency } from '../model/currency';
import { CurrencyService } from '../service/currency.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit, OnDestroy {

  currencies: Array<Currency> = []

  currencySubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private currencyService: CurrencyService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.currencyService.currencies

    this.currencySubscribe = this.currencyService.currencyObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.currencySubscribe.unsubscribe()
  }

  onEditCurrency(currency: Currency){
    this.currencyService.lastEditedCurrency = currency
    this.urlService.jumpTo('/currency-edit')
  }

  onDeleteCurrency(currency: Currency){
    this.currencyService.deleteCurrency(currency)
  }

}
