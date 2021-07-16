import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-lot-page',
  templateUrl: './selected-lot-page.component.html',
  styleUrls: ['./selected-lot-page.component.scss'],
})
export class SelectedLotPageComponent implements OnInit {
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
