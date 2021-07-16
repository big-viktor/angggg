import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lot-page',
  templateUrl: './card-lot-page.component.html',
  styleUrls: ['./card-lot-page.component.scss'],
})
export class CardLotPageComponent implements OnInit {
  routerCarAuctions = '/CarAuctionsPage';
  routerOtherAuctions = '';
  routerAnnouncements = '/AnnouncementPage';
  routerVinCheck = '/VinCheckPage';
  routerNews = '/NewsPage';
  routerSoldlots = '';
  routerAboutCompany = '/AboutCompanyPage';
  routerPartners = '';
  routerClosedLotPage = '/CompletedPublicationPage';
  routerTransferLots = '';
  routerSmsPage = '/SmsPage';
  routerMyOffice = '/MyOffice';
  routerCreatingLot = '';
  constructor() {}

  ngOnInit(): void {}
}
