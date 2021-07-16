import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  routerCarAuctions = '/CarAuctionsPage';
  routerOtherAuctions = '';
  routerAnnouncements = '/AnnouncementPage';
  routerVinCheck = '/VinCheckPage';
  routerNews = '/NewsPage';
  routerSoldlots = '';
  routerAboutCompany = '';
  routerPartners = '';
  routerClosedLotPage = '';
  routerTransferLots = '';
  routerSmsPage = '';
  routerMyOffice = '';
  routerCreatingLot = '';
  src = '/assets/Mask Group (63).png';
  name = 'Audi представила новый кроссовер Q4 e-tron и его купеобразную версию';
  text =
    'Самый маленький электрокар Audi предлагается с тремя вариантами силовых установок и системой быстрой зарядки';
  data = '15.05.2021';
  router = '/NewsDetailsPage';
  src1 = '/assets/Mask Group (64).png';
  name1 = 'Героиня сториз. Тест-драйв Hyundai Elantra ';
  text1 =
    'Ниспадающая линия крыши, узкий прищур фар и не менее эффектные задние фонари придают «Элантре» спортивный и стремительный вид. При этом за яркой оболочкой скрывается обычный седан';
  data1 = '14.05.2021';
  router1 = '/NewsDetailsPage';
  constructor() {}

  ngOnInit(): void {}
}
