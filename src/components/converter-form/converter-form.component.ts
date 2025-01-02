import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyFetcherService} from "../../services/currency-fetcher.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CurrencyRate} from "../../models/currency-rate";
import {HistoryResultsService} from "../../services/history-results.service";
import {ConverterResult} from "../../models/converter-result";



@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent implements OnInit {

  form: FormGroup;
  currencies: Observable<{ [symbol: string]: string }>;
  rate: ConverterResult;

  constructor(private fb: FormBuilder,
              private historyResultsService:HistoryResultsService,
              private currencyFetcherService: CurrencyFetcherService,
              private cdr:ChangeDetectorRef) {
    this.form = this.fb.group({
      amountInput: ['', [Validators.required, Validators.min(0)]],
      originalCurrency: ['USD', Validators.required],
      destCurrency: ['ILS', Validators.required]
    });
  }

  ngOnInit(): void {
    this.currencies = this.currencyFetcherService.getCurrencies();
    this.form.valueChanges.subscribe(val => {
      this.rate = undefined;
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      let amount = this.form.get('amountInput')?.value;
      let base = this.form.get('originalCurrency')?.value;
      let dest = this.form.get('destCurrency')?.value;
      this.currencyFetcherService.getRate(base,dest).subscribe((rate: CurrencyRate)=>{
        this.rate = {
          originalAmount: amount,
          originalCurrency: base,
          destAmount: amount * rate.rates[dest],
          destCurrency: dest
        };
        this.historyResultsService.results.push({...this.rate});
      });
    }
  }
}
