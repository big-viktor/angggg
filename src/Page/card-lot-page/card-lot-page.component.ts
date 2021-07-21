import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lot-page',
  templateUrl: './card-lot-page.component.html',
  styleUrls: ['./card-lot-page.component.scss'],
})
export class CardLotPageComponent implements OnInit {
  PageActiveLot = true;

  srcImg = 'assets/Mask Group.png';
  numLot = 'Лот 92-21331';
  nameLot = 'BMW 5 серии VII (G30/G31)';
  data = ' 2017';
  city = 'Москва';
  ofLOt = 'Открытый';
  lotActivOn = false;
  lotActivOf = true;
  price = '5 859 990₽';
  endDate = '12.09.2021';
  box = 'АКПП';
  engine = '4.4 л / 407 л.с. / Бензин';
  run = '';
  lotActive = 'Активен';
  bidStep = '10 000₽';
  timeLot = ' 00:13:14';
  OnModeration = true;
  Ofmoderation = false;
  exetOn = true;
  constructor() {}

  ngOnInit(): void {}
}
