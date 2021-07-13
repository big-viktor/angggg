import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-lot-closed-revers',
  templateUrl: './new-lot-closed-revers.component.html',
  styleUrls: ['./new-lot-closed-revers.component.scss'],
})
export class NewLotClosedReversComponent implements OnInit {
  selected = '/assets/Group.png';
  selectedTwo = '/assets/Group (1).png';
  image = '/assets/Group (1).png';
  add = true;
  constructor() {}
  toggle() {
    if (this.add) {
      this.image = this.selected;
      this.add = false;
    } else {
      this.image = this.selectedTwo;
      this.add = true;
    }
  }
  ngOnInit(): void {
    console.log(this.selected);
  }
}
