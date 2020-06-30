import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { ManagerService} from '../services/manager.service';
import {RequestService} from '../services/request.service';
import {User} from '../models/user.model';
import {Manager} from '../models/manager.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  currentUser: User;
  manager: Manager;


  public doughnutChartLabels = ['clothing', 'stationery', 'hardware', 'confectionery'];

  public doughnutChartData = [150000, 120000, 90000, 200000];

  public doughnutChartType = 'doughnut';

  // bar
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,

  };
  public barChartLabels = ['Jan', 'Feb', 'March', 'April', 'June'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [15, 30, 40, 50, 70], label: 'Purchase' },
    { data: [20, 40, 50, 60, 80], label: 'Sales' }
  ];

  // pie
  public pieChartLabels = ['paid', 'unpaid'];
  public pieChartData = [80 , 20 ];
  public pieChartType = 'pie';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private merchantService: ManagerService,
    private requestService: RequestService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
}
