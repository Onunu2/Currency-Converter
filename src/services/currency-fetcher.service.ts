import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const currencyUrl = `https://api.frankfurter.dev/v1`;


@Injectable({
  providedIn: 'root'
})
export class CurrencyFetcherService {

  currencies: Observable<{[symbol: string]: string}>;

  constructor(private http: HttpClient) {
    this.currencies = this.getCurrencies();
  }

  getRate(base: string, symbol: string): Observable<any> {
    return this.http.get(`${currencyUrl}/latest?base=${base}&symbols=${symbol}`);
  }

  getCurrencies(): Observable<{[symbol: string]: string}>{
    return this.http.get<{[symbol: string]: string}>(`${currencyUrl}/currencies`);
  }
}
