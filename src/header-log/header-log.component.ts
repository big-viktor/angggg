import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-log',
  templateUrl: './header-log.component.html',
  styleUrls: ['./header-log.component.scss'],
})
export class HeaderLogComponent implements OnInit {
  @Input() routerCarAuctions = '';
  @Input() routerOtherAuctions = '';
  @Input() routerAnnouncements = '';
  @Input() routerVinCheck = '';
  @Input() routerNews = '';
  @Input() routerSoldlots = '';
  @Input() routerAboutCompany = '';
  @Input() routerPartners = '';
  @Input() routerCreatingLot = '';

  constructor() {}

  ngOnInit(): void {}
}
