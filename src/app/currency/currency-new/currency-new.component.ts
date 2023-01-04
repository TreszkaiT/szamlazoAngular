import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../service/currency.service';

@Component({
  selector: 'app-currency-new',
  templateUrl: './currency-new.component.html',
  styleUrls: ['./currency-new.component.css']
})
export class CurrencyNewComponent implements OnInit {

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.currencyService.addCurrency(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
