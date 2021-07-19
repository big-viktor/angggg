import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-lot',
  templateUrl: './selected-lot.component.html',
  styleUrls: ['./selected-lot.component.scss'],
})
export class SelectedLotComponent implements OnInit {
  selected = 'Откритий';
  selectedTwo = 'Закрытый';
  transmission = 'AКПП';
  engine = ' 4.4л/407 л.с. / Бензин ';
  run = 'Пробег 74 000 км';

  nameActiv = '';
  selecteds = '/assets/Group.png';
  selectedTwos = '/assets/Group (1).png';
  image = '/assets/Group (1).png';
  add = true;

  toggle() {
    if (this.add) {
      this.image = this.selecteds;
      this.add = false;
    } else {
      this.image = this.selectedTwos;
      this.add = true;
    }
  }
  isActive = false;
  isStatusDisActive = true;
  isNone = true;
  isTop = true;

  currentClasses = {
    verdanaColor: this.isActive,
    navyColor: this.isStatusDisActive,
  };
  activDisplay = {
    displayNone: this.isNone,
  };
  activTop = {
    displayTop: this.isTop,
  };

  constructor() {}

  ngOnInit(): void {
    if (this.isActive === true) {
      this.nameActiv = this.selected;
    }
    if (this.isStatusDisActive === true) {
      this.nameActiv = this.selectedTwo;
      this.transmission = '--';
      this.engine = '--/--/-- ';
      this.run = '--';
    }
  }
}
