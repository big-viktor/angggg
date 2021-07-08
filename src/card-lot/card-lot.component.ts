import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lot',
  templateUrl: './card-lot.component.html',
  styleUrls: ['./card-lot.component.scss']
})

export class CardLotComponent implements OnInit {
  selected = '/assets/Group.png';
  selectedTwo = '/assets/Group (1).png';
  image = '/assets/Group (1).png';
  add = true;
  constructor() { }
  toggle(){
    if(this.add){
      this.image = this.selected;
      this.add = false;
    }else{
      this.image = this.selectedTwo;
      this.add = true;
    }
 }
  ngOnInit(): void {
  console.log(this.selected);

  }

}
