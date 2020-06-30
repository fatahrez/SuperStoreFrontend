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

  // p1
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,

  };
  public barChartLabels = ['Jan', 'Feb', 'March', 'April', 'June'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [15, 30, 40, 50, 70], label: 'shop 1' },
    { data: [20, 40, 50, 60, 80], label: 'shop 2' },
    { data: [20, 40, 50, 60, 80], label: 'shop 3' }
  ];

  // p1
  public barChartOptions1 = {
    scaleShowVerticalLines: false,
    responsive: true,

  };
  public barChartLabels1 = ['Jan1', 'Feb1', 'March1', 'April1', 'June1'];
  public barChartType1 = 'bar';
  public barChartLegend1 = true;

  public barChartData1 = [
    { data: [15, 30, 40, 50, 70], label: 'shop 1' },
    { data: [20, 40, 50, 60, 80], label: 'shop 2' },
    { data: [20, 40, 50, 60, 80], label: 'shop 3' }
  ];

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

