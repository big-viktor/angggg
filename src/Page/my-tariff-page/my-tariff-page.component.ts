import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tariff-page',
  templateUrl: './my-tariff-page.component.html',
  styleUrls: ['./my-tariff-page.component.scss'],
})
export class MyTariffPageComponent implements OnInit {
  PageActiveMyTarrif = true;
  constructor() {}

  ngOnInit(): void {}
}
