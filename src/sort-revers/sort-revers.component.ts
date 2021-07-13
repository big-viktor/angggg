import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-revers',
  templateUrl: './sort-revers.component.html',
  styleUrls: ['./sort-revers.component.scss'],
})
export class SortReversComponent implements OnInit {
  currentName1 = '';
  currentText1 = 'По цене';
  currentText2 = 'По дате завершения';
  currentText3 = 'Поиск № лота';
  currentText4 = 'Показать по 20';
  constructor() {}

  ngOnInit(): void {}
}
