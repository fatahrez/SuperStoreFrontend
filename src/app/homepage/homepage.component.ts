import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { NavbarComponent } from '../navbar/navbar.component';

declare const myTest : any
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})

export class HomepageComponent implements OnInit {
username; 
  onClick(){
    myTest();
  }



  ngOnInit(): void {
  
  }

}
