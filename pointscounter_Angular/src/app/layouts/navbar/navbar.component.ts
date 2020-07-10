import { Component, OnInit } from '@angular/core';
import {MainServiceService} from 'src/app/services/main-service.service';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 

  constructor( private service: MainServiceService) { 
    $(document).ready(function(){
      $(".nav-tabs a").click(function(){
        $(this).tab('show');
      });
    });
    
  }

  ngOnInit() {
    // this.isColored1 = true;
  }
  signup(myForm){
    this.service.signUp(myForm)
    

  }
  signin(myForm){
    this.service.signIn(myForm)
  }

  

}
