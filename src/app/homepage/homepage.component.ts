import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { NavbarComponent } from '../navbar/navbar.component';

declare var TxtRotate : any

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})

export class HomepageComponent implements OnInit {




  ngOnInit(): void {
    new TxtRotate()
    
  }

}
