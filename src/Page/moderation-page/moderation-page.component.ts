import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderation-page',
  templateUrl: './moderation-page.component.html',
  styleUrls: ['./moderation-page.component.scss'],
})
export class ModerationPageComponent implements OnInit {
  PageActiveModer = true;
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
  run = 'Пробег 74 000 км';
  lotActive = 'Активен';
  bidStep = '10 000₽';
  timeLot = ' 00:13:14';
  OnModeration = false;
  Ofmoderation = true;
  srcImg1 = 'assets/Mask Group (91).png';
  numLot1 = 'Лот 92-21331';
  nameLot1 = 'BMW 5 серии VII (G30/G31)';
  data1 = ' 2017';
  city1 = 'Москва';
  ofLOt1 = 'Закрытый';
  lotActivOn1 = true;
  lotActivOf1 = false;
  price1 = '---';
  endDate1 = '12.09.2021';
  box1 = '--';
  engine1 = '-- / -- / --';
  run1 = '--';
  lotActive1 = 'Активен';
  bidStep1 = '10 000₽';
  timeLot1 = ' 00:13:14';
  OnModeration1 = false;
  Ofmoderation1 = true;
  exetOn = true;
  constructor() {}

  ngOnInit(): void {}
}
