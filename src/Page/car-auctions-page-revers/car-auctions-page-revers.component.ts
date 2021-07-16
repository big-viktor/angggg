import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-auctions-page-revers',
  templateUrl: './car-auctions-page-revers.component.html',
  styleUrls: ['./car-auctions-page-revers.component.scss'],
})
export class CarAuctionsPageReversComponent implements OnInit {
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
