import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {
  currentItem = 'Аукцион по продаже автомобилей';
  foto = '/assets/Frame (4).png';
  text = 'Автомобили от Банков,Страховых и Лизинговых Компаний';
  price = 'Кол-во: 100';
  currentItem2 = 'Аукцион по продаже автомобильних запчастей';
  foto2 = '/assets/Frame (3).png';
  text2 = 'Новые и БУ запачасти лотам и поштучно';
  price2 = 'Кол-во: 100';
  currentItem3 = 'Аукцион по продаже имущества';
  foto3 = '/assets/Frame.png';
  text3 = 'Имущество от Банков и Лизинговых Компаний';
  price3 = 'Кол-во: 100';
  currentItem4 = 'Продажа автомобилей от собственника';
  foto4 = '/assets/Frame (5).png';
  text4 = 'Прямая продажа';
  price4 = 'Кол-во: 100';

  ngOnInit(): void {}
}
