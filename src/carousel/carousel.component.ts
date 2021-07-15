import { Component, NgModule, OnInit } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  value = '';
  height = 120;
  width = 1100;
  cellWidth = 120;
  cellsToScroll = 2;
  arrowsOutside = true;

  constructor() {}

  ngOnInit(): void {}
}
