import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.css']
})
export class ClerkComponent implements OnInit {



  constructor(
    private router: Router,
    private userService: UserService,
   
  ) { }

  ngOnInit():void {
   

  }


  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

}