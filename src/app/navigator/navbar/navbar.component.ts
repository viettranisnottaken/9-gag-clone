import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems = [1, 2, 3];
  isFunctionOpen = { selected: true, rest: false };
  isFunctionSelected = false;

  constructor() {}

  ngOnInit(): void {}

  openFunction(): void {
    this.isFunctionSelected =
      this.isFunctionOpen.rest || this.isFunctionOpen.selected;
  }
}
