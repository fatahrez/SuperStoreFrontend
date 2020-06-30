import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';




@Component({
  selector: 'app-merchant-manager',
  templateUrl: './merchant-manager.component.html',
  styleUrls: ['./merchant-manager.component.css']
})
export class MerchantManagerComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

}
