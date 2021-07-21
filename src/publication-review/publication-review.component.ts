import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-review',
  templateUrl: './publication-review.component.html',
  styleUrls: ['./publication-review.component.scss'],
})
export class PublicationReviewComponent implements OnInit {
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
