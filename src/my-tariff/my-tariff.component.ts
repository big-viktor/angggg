import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tariff',
  templateUrl: './my-tariff.component.html',
  styleUrls: ['./my-tariff.component.scss']
})
export class MyTariffComponent implements OnInit {
  visibility: boolean = true;
  noneDisplay:boolean = false;
  // переключаем переменную
  toggle(){
      this.visibility=!this.visibility;
      this.noneDisplay=! this.noneDisplay;
  }
 
  constructor() { }
  
  ngOnInit(): void {
  }

}
