import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ConverterFormComponent} from "./components/converter-form/converter-form.component";
import {HistoryComponent} from "./components/history/history.component";


const routes: Routes = [
  { path: '', redirectTo: '/converter', pathMatch: 'full' },
  { path: 'converter', component: ConverterFormComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
