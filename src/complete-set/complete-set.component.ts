import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-set',
  templateUrl: './complete-set.component.html',
  styleUrls: ['./complete-set.component.scss']
})
export class CompleteSetComponent implements OnInit {
  currentItem = 'Television';
  constructor() { }

  ngOnInit(): void {
  }

}
