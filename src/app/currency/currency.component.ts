import { Component, OnInit, OnDestroy } from '@angular/core';
import { Currency } from '../model/currency';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit, OnDestroy {

  currencies: Array<Currency> = []

  currencySubscribe: any

  constructor(private currencyService: CurrencyService) { 

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

}
