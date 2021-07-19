import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {
  @Input() name = '';
  @Input() list = '';
  @Input() list1 = '';
  @Input() list2 = '';
  @Input() list3 = '';
  @Input() list4 = '';
  @Input() list5 = '';
  @Input() list6 = '';
  @Input() list7 = '';
  @Input() list8 = '';
  @Input() list9 = '';
  @Input() router = '';
  constructor() {}
  visibility: boolean = true;
  onMenu() {
    this.visibility = !this.visibility;
  }
  ngOnInit(): void {}
}
