import { Component, NgModule, OnInit } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images = ['/assets/Mask Group (17).png'];
  value = '';

  constructor() {}

  ngOnInit(): void {}
}
