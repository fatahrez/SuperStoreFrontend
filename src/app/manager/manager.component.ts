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

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,

  };
  public barChartLabels = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best' }
  ];


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
