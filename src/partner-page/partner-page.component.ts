import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.scss'],
})
export class PartnerPageComponent implements OnInit {
  routerNews = '/NewsPage';
  routerAboutCompany = '/AboutCompanyPage';
  routerVinCheck = '/VinCheckPage';
  constructor() {}

  ngOnInit(): void {}
}
