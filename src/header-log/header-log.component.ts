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
  @Input() active: boolean | undefined;
  isVerdana = true;
  isNavy = true;
  disableMessage = true;

  constructor() {}
  currentClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy,
  };

  ngOnInit(): void {
    if (this.active) {
    }
  }
}
