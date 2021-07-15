import { Component, NgModule, OnInit } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  value = '';
  height = 80;
  width = 750;
  cellWidth = 150;
  cellsToShow = 10;
  // Properties = {
  //   cellsToShow: 1,
  //   overflowCellsLimit: 3,
  //   width: '100px',
  //   arrows: false,
  // };
  constructor() {}

  ngOnInit(): void {}
}
