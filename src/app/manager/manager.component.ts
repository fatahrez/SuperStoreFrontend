import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { ManagerService} from '../services/manager.service';
import { ClerkService} from '../services/clerk.service';
import {RequestService} from '../services/request.service';
import {User} from '../models/user.model';
import {ProductBatch} from '../models/product.model';
import {Manager} from '../models/manager.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  currentUser: User;
  manager: Manager;
  orders :ProductBatch[];
  


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private merchantService: ManagerService,
    private clerkService: ClerkService,
    private requestService: RequestService,
    private router: Router,
  ) { }

  ngOnInit() {
  console.log('njrkkfdmnkwope')
  this.getProducts()
  }
  
  getProducts(){
    this.clerkService.getProductBatch()
    .subscribe((response:ProductBatch[])=> {
      this.orders = response.filter(order=>order.paid_for === false)
      console.log(this.orders)
    })
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }


}
