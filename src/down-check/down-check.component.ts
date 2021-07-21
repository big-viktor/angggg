import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-check',
  templateUrl: './down-check.component.html',
  styleUrls: ['./down-check.component.scss'],
})
export class DownCheckComponent implements OnInit {
  @Input() name = '';
  @Input() text = '';
  @Input() list = '';
  @Input() list1 = '';
  @Input() list2 = '';
  @Input() list3 = '';
  @Input() list4 = '';
  @Input() condition!: boolean;

  visibility: boolean = true;

  onMenu() {
    this.visibility = !this.visibility;
  }
  constructor() {}

  ngOnInit(): void {}
}
