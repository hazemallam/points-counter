import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchantshome',
  templateUrl: './merchantshome.component.html',
  styleUrls: ['./merchantshome.component.css']
})
export class MerchantshomeComponent implements OnInit {

  isColored1 = true;
  isColored2 = false;
  isColored3 = false;
  isColored4 = false;
  constructor() { }

  ngOnInit() {
    this.isColored1 = true
  }
  changeContent1() {
    this.isColored1 = true;
    this.isColored2 = false;
    this.isColored3 = false;
    this.isColored4 = false;
  }
  changeContent2() {
    this.isColored1 = false;
    this.isColored2 = true;
    this.isColored3 = false;
    this.isColored4 = false;
  }
  changeContent3() {
    this.isColored1 = false;
    this.isColored2 = false;
    this.isColored3 = true;
    this.isColored4 = false;
  }
  changeContent4() {
    this.isColored1 = false;
    this.isColored2 = false;
    this.isColored3 = false;
    this.isColored4 = true;
  }
  signup(myForm){
    
  }
}
