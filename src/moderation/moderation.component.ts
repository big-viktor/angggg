import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.scss']
})
export class ModerationComponent implements OnInit {
  selected = "Откритий";
  selectedTwo = "Закритий";
  transmission = "AКПП";
  engine = " 4.4л/407 л.с. / Бензин ";
  run = "Пробег 74 000 км";

  nameActiv="";
    
  isActive = false;
  isStatusDisActive = true;
  
  currentClasses={
    verdanaColor: this.isActive,
    navyColor: this.isStatusDisActive,
}
 

  
  constructor() {
   }

  ngOnInit(): void {
    if(this.isActive === true){
      this.nameActiv = this.selected;
    }
    if(this.isStatusDisActive === true){
      this.nameActiv = this.selectedTwo;
      this.transmission = "--";
      this.engine = "--/--/-- ";
      this.run = "--";
    }
  }
 

}
