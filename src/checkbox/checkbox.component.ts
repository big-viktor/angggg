import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent{
  @Input() item = '';
  visibility: boolean = false;
  onSave(){
    this.visibility=!this.visibility;
  }

 
}
