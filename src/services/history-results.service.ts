import { Injectable } from '@angular/core';
import {ConverterResult} from "../models/converter-result";


const RESULTS = 'results';

@Injectable({
  providedIn: 'root'
})
export class HistoryResultsService {
  results: ConverterResult[];

  constructor() {
    this.results = JSON.parse(localStorage.getItem(RESULTS)) || [];

    window.onbeforeunload = () => {
      localStorage.setItem(RESULTS, JSON.stringify(this.results));
    };
  }
}
