import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {NavHeader} from "../../models/nav-header";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  headers: NavHeader[] = [{display: 'converter', path:'/converter'},
                    {display: 'history', path:'/history'}]

  constructor(private router: Router) {}

  openRoute(header: NavHeader) {
      this.router.navigate([header.path]);
  }
}
