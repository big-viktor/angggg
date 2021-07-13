import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-check',
  templateUrl: './down-check.component.html',
  styleUrls: ['./down-check.component.scss'],
})
export class DownCheckComponent implements OnInit {
  @Input() name = '';
  @Input() text = '';
  constructor() {}

  ngOnInit(): void {}
}
