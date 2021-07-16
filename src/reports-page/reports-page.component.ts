import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss'],
})
export class ReportsPageComponent implements OnInit {
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
