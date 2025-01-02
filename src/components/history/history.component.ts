import { Component } from '@angular/core';
import {HistoryResultsService} from "../../services/history-results.service";
import {ConverterResult} from "../../models/converter-result";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  results: ConverterResult[];
  constructor(private historyResultsService: HistoryResultsService) {
    this.results = historyResultsService.results;
  }
}
