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
