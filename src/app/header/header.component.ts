import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbar', { static: false }) navbar: ElementRef;
  @ViewChild('sideBarMenu', { static: false }) sideBarMenu: ElementRef;
  @ViewChild('sidebarLogin', { static: false }) sidebarLogin: ElementRef;

  constructor() { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 20) {
      this.navbar.nativeElement.classList.add('sticky-top');
    } else {
      this.navbar.nativeElement.classList.remove('sticky-top');
    }
  }


  openNav() {
    if (window.innerWidth > 480) {
      this.sideBarMenu.nativeElement.style.width = '40%';
      this.sideBarMenu.nativeElement.style.left = '60%';
    } else {
      this.sideBarMenu.nativeElement.style.width = '100%';
    }

  }
  closeNav() {
    this.sideBarMenu.nativeElement.style.width = '0%';
    this.sidebarLogin.nativeElement.style.width = '0%';
    this.sideBarMenu.nativeElement.style.left = '0';
    this.sidebarLogin.nativeElement.style.left = '0';
  }
  openNav_login() {
    if (window.innerWidth > 480) {
      this.sidebarLogin.nativeElement.style.width = '40%';
      this.sidebarLogin.nativeElement.style.left = '60%';
    } else {
      this.sidebarLogin.nativeElement.style.width = '100%';
    }
  }


}
