import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-border',
  templateUrl: './partner-border.component.html',
  styleUrls: ['./partner-border.component.scss'],
})
export class PartnerBorderComponent implements OnInit {
  visibility: boolean = true;
  visibilitys: boolean = false;
  onPlay() {
    this.visibilitys = !this.visibilitys;
    this.visibility = !this.visibility;
  }
  constructor() {}

  ngOnInit(): void {}
}
