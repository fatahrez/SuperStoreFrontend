import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService, MerchantService} from '../services';
import { User } from '../models/user.model';
import { Merchant } from '../models/merchant.model';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  currentUser: User;
  merchant: Merchant;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private merchantService: MerchantService,
 
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }


}

