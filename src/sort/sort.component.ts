import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  currentList = 'ТЕСТ1';
  currentList1 = 'ТЕСТ2';
  currentList2 = 'ТЕСТ3';
  currentList3 = 'ТЕСТ4';
  currentList4 = 'ТЕСТ5';
  currentName1 = '';
  currentText1 = 'По цене';
  currentText2 = 'По дате завершения';
  currentText3 = 'Поиск № лота';
  currentText4 = 'Показать по 20';
  upDown = false;

  constructor() {}

  ngOnInit(): void {}
}
