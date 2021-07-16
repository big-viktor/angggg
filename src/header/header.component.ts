import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() routerCarAuctions = '';
  @Input() routerOtherAuctions = '';
  @Input() routerAnnouncements = '';
  @Input() routerVinCheck = '';
  @Input() routerNews = '';
  @Input() routerSoldlots = '';
  @Input() routerAboutCompany = '';
  @Input() routerPartners = '';
  @Input() routerClosedLotPage = '';
  @Input() routerTransferLots = '';
  @Input() routerSmsPage = '';
  @Input() routerMyOffice = '';
  @Input() routerCreatingLot = '';

  nameOfis = 'Мой кабинет';
  list = 'Настройки';
  list1 = 'Связь с администрацией';
  list2 = 'Мои лоты';
  list3 = 'Лоты на модерации';
  list4 = 'Избранные лоты';
  list5 = 'Мои завершенные лоты';
  list6 = 'Мои объявления';
  list7 = 'Архив лотов';
  list8 = 'Мой тариф';
  list9 = 'История оплат';

  visibility: boolean = false;
  visibilitys: boolean = true;
  onExit() {
    this.visibilitys = !this.visibilitys;
  }
  onSave() {
    this.visibility = !this.visibility;
  }
  constructor() {}

  ngOnInit(): void {}
}
