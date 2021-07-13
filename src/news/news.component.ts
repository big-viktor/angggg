import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() src = '';
  @Input() name = '';
  @Input() text = '';
  @Input() data = '';
  @Input() router = '';
  constructor() {}

  ngOnInit(): void {}
}
