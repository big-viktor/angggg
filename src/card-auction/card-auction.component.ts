import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-auction',
  templateUrl: './card-auction.component.html',
  styleUrls: ['./card-auction.component.scss'],
})
export class CardAuctionComponent implements OnInit {
  @Input() name = '';
  @Input() src = '';
  @Input() price = '';
  @Input() text = '';
  constructor() {}

  ngOnInit(): void {}
}
