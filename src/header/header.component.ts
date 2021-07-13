import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
