import { Component, OnInit } from '@angular/core';
declare const myTest : any
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {


  onClick(){
    myTest();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
