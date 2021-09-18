import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  expansionvar = false;
  constructor() { }

  ngOnInit() { }

  expansion(a) {
    this.expansionvar = (a === 0) ? true : false;
  }
  openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
}
