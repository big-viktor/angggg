import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  visibility: boolean = true;
  newSms:boolean = true;
  constructor() { }
  nev(){
    this.visibility=!this.newSms;
  }
  ngOnInit(): void {
  }

}
