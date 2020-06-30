import { Component, OnInit } from '@angular/core';
import { ClerkService } from '../services/clerk.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProductBatch } from '../models/product.model';
import { UserService } from '../services';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-order-edit-form',
  templateUrl: './order-edit-form.component.html',
  styleUrls: ['./order-edit-form.component.css']
})
export class OrderEditFormComponent implements OnInit {
  orderForm: FormGroup;
  loading = false;  // loader while awaiting response
  submitted = false;
  products: ProductBatch[];
  order : ProductBatch;
  id: string;

  constructor(
    private clerkService : ClerkService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }


  ngOnInit() {
    console.log('jbeoiovjfdnfkeito')
    this.id = this.route.snapshot.params.id
    this.buildOrderBatch()
    this.getOrder(this.id);

  }



  buildOrderBatch = (order:any = {}) => {
    this.orderForm = this.fb.group({
      item : [!!order.item ? order.item : ''],
      buying_price: [order.buying_price ? order.buying_price : ''],
      quantity_bought: [order.quantity_bought ? order.quantity_bought : ''],
      supplier: [order.supplier ? order.supplier : ''],
      clerk: [order.clerk ? order.clerk : ''],
      shop : [order.shop ? order.shop : ''],
      paid_for: [order.paid_for ? order.paid_for : ''],
  
  });
}

  get field() {
    return this.orderForm.controls;
  }



  getOrder(id){
    this.clerkService.getProductById(id)
    .subscribe((response:ProductBatch)=> {
      this.order = response
      console.log(this.order)
      this.buildOrderBatch(this.order);
    })
  }



  updateOrder = () => {
    this.submitted = true
    if (this.orderForm.invalid) {
      return ;
    }

    this.loading = true;
    console.log("Form - ", this.orderForm.value);
    this.clerkService.updateProductBatch(this.orderForm.value, this.id)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("productBatch data-", data);
          this.loading = false;
          this.router.navigate(['/clerk']);
        },
        (error) => {
          this.loading = false;
          console.log("Login Error-", error);
        }
      );
  }




  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  

}


