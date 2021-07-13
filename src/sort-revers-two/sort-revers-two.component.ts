import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-revers-two',
  templateUrl: './sort-revers-two.component.html',
  styleUrls: ['./sort-revers-two.component.scss'],
})
export class SortReversTwoComponent implements OnInit {
  constructor() {}
  currentName1 = '';
  currentText1 = 'Тип объявления';
  currentText2 = 'По дате завершения';
  currentText3 = 'Поиск № лота';
  currentText4 = 'Показать по 20';
  ngOnInit(): void {}
}
