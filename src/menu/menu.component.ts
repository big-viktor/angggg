import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() isActiveInf!: boolean;
  @Input() isActiveMyOfis!: boolean;
  @Input() isActiveLot!: boolean;
  @Input() isActiveModer!: boolean;
  @Input() isActiveSelected!: boolean;
  @Input() isActiveCompleted!: boolean;
  @Input() isActiveMyAds!: boolean;
  @Input() isActiveLotArch!: boolean;
  @Input() isActiveMyTarrif!: boolean;
  @Input() isActivePayment!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
