import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() routerCarAuctions = '';
  @Input() routerOtherAuctions = '';
  @Input() routerAnnouncements = '';
  @Input() routerVinCheck = '';
  @Input() routerNews = '';
  @Input() routerSoldlots = '';
  @Input() routerAboutCompany = '';
  @Input() routerPartners = '';
  @Input() routerLot = '';
  @Input() routerTransferLots = '';
  @Input() routerSmsPage = '';
  @Input() routerMyOffice = '';
  @Input() routerCreatingLot = '';

  visibility: boolean = false;
  visibilitys: boolean = true;
  onExit() {
    this.visibilitys = !this.visibilitys;
  }
  onSave() {
    this.visibility = !this.visibility;
  }
  constructor() {}

  ngOnInit(): void {}
}
