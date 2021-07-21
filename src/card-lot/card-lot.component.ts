import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lot',
  templateUrl: './card-lot.component.html',
  styleUrls: ['./card-lot.component.scss'],
})
export class CardLotComponent implements OnInit {
  @Input() numLot = '';
  @Input() nameLot = '';
  @Input() data = '';
  @Input() city = '';
  @Input() ofLOt = '';
  @Input() price = '';
  @Input() endDate = '';
  @Input() box = '';
  @Input() engine = '';
  @Input() run = '';
  @Input() lotActive = '';
  @Input() bidStep = '';
  @Input() timeLot = '';
  @Input() src = '';
  @Input() moderationOn!: boolean;
  @Input() moderationOf!: boolean;
  @Input() lotActivOn!: boolean;
  @Input() lotActivOf!: boolean;
  @Input() bidStepOn!: boolean;
  @Input() exetOn!: boolean;

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
