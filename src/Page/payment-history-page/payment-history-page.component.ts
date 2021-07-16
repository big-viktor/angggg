import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history-page',
  templateUrl: './payment-history-page.component.html',
  styleUrls: ['./payment-history-page.component.scss'],
})
export class PaymentHistoryPageComponent implements OnInit {
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
