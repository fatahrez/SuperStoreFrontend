import { Component, OnInit } from '@angular/core';
import { ClerkService } from '../services/clerk.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProductBatch } from '../models/product.model';
import { UserService } from '../services';

@Component({
  selector: 'app-clerk-order',
  templateUrl: './clerk-order.component.html',
  styleUrls: ['./clerk-order.component.css']
})
export class ClerkOrderComponent implements OnInit {
  productForm: FormGroup;
  loading = false;  // loader while awaiting response
  submitted = false;
  products: ProductBatch[]

  constructor(
    private clerkService : ClerkService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit (){
    this.buildProductBatch ();
  }
  buildProductBatch = () => {
    this.productForm = this.fb.group({
      item: ['', Validators.required],
      buying_price: ['', [Validators.required]],
      quantity_bought: ['', Validators.required],
      supplier: ['', Validators.required],
      clerk: ['', Validators.required],
      shop : ['', Validators.required],
      paid_for: [true, Validators.required],
  
  });
}

  get field() {
    return this.productForm.controls;
  }

  createProduct = () => {
    this.submitted = true
    if (this.productForm.invalid) {
      return ;
    }

    this.loading = true;
    this.productForm.value.quantity_bought = parseInt(this.productForm.value.quantity_bought)
    console.log("Form - ", this.productForm.value);
    this.clerkService.postProductBatch(this.productForm.value)
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


