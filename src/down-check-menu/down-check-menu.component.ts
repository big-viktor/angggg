import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-check-menu',
  templateUrl: './down-check-menu.component.html',
  styleUrls: ['./down-check-menu.component.scss'],
})
export class DownCheckMenuComponent implements OnInit {
  currentName = 'Категория';
  currentText = 'Не выбранно ';
  currentList = 'ТЕСТ1';
  currentList1 = 'ТЕСТ2';
  currentList2 = 'ТЕСТ3';
  currentList3 = 'ТЕСТ4';
  currentList4 = 'ТЕСТ5';
  currentName1 = 'Тип ТС';
  currentText1 = 'Не выбранно';
  currentName2 = 'Марка';
  currentText2 = 'Не выбранно';
  currentName3 = 'Модель';
  currentText3 = 'Не выбранно';
  currentName4 = 'Тип КПП';
  currentText4 = 'Не выбранно';
  currentName5 = 'Год выпуска';
  currentText5 = '';
  currentName6 = '';
  currentText6 = '';
  currentName8 = 'Регион';
  currentText8 = 'Не выбранно';
  currentName9 = 'Город';
  currentText9 = 'Не выбранно';
  upDown = true;

  constructor() {}

  ngOnInit(): void {}
}
