import { Component, OnInit } from '@angular/core';
import { MainServiceService} from 'src/app/services/main-service.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  discover = []
  subs : Subscription;
  constructor(private service: MainServiceService) { }

  ngOnInit() {
     this.service.getAllDiscover().subscribe(elemet =>{
      console.log(elemet)
      this.discover.push(elemet)
    }
    )
  }


}
