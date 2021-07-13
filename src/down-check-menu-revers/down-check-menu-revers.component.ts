import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-check-menu-revers',
  templateUrl: './down-check-menu-revers.component.html',
  styleUrls: ['./down-check-menu-revers.component.scss'],
})
export class DownCheckMenuReversComponent implements OnInit {
  currentName = 'Тип объявления';
  currentText = 'Не выбранно ';
  currentName1 = 'Категория';
  currentText1 = 'Не выбранно';
  currentName2 = 'Регион';
  currentText2 = 'Не выбранно';
  currentName3 = 'Город';
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
  constructor() {}

  ngOnInit(): void {}
}
