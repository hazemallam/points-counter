import { Component, OnInit } from '@angular/core';
import { MainServiceService} from 'src/app/services/main-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isColored1 = true;
  isColored2 = false;
  isColored3 = false;
  isColored4 = false;

  constructor( private service: MainServiceService) { }

  ngOnInit() {
    // this.isColored1 = true;
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
  contact(myFormData){
     return this.service.contact(myFormData)
  }

}
