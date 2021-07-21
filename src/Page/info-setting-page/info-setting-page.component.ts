import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-setting-page',
  templateUrl: './info-setting-page.component.html',
  styleUrls: ['./info-setting-page.component.scss'],
})
export class InfoSettingPageComponent implements OnInit {
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
  pageisActiveInf = true;
  constructor() {}

  ngOnInit(): void {}
}
