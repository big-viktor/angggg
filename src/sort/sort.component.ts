import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  currentName1 = '';
  currentText1 = 'По цене';
  currentText2 = 'По дате завершения';
  currentText3 = 'Поиск № лота';
  currentText4 = 'Показать по 20';
  constructor() {}

  ngOnInit(): void {}
}
