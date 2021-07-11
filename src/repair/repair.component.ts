import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss'],
})
export class RepairComponent implements OnInit {
  visibility: boolean = false;
  onInfo() {
    this.visibility = !this.visibility;
  }

  constructor() {}

  ngOnInit(): void {}
}
