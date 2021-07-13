import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss'],
})
export class LotComponent implements OnInit {
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
