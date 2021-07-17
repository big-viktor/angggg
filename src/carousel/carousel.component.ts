import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  title = 'ng-carousel-demo';

  onNext() {}
  value = '';
  height = 80;
  width = 1100;
  cellWidth = 240;
  // cellsToShow = 8;
  cellsToScroll = 1;
  arrowsOutside = true;
  arrows = true;
}
