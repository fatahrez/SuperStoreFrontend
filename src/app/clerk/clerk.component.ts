import { Component, OnInit } from '@angular/core';
import { ClerkService } from '../services/clerk.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProductBatch } from '../models/product.model';

@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.css']
})
export class ClerkComponent implements OnInit {
  productForm: FormGroup;
  loading = false;  // loader while awaiting response
  submitted = false;
  products: ProductBatch[]


  constructor(
    private clerkService : ClerkService,
    private fb: FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.buildProductBatch ();
    this.getProducts()
  }

  buildProductBatch = () => {
    this.productForm = this.fb.group({
      item: ['', Validators.required],
      buying_price: ['', [Validators.required]],
      quantity_bought: ['', Validators.required],
      supplier: ['', Validators.required],
      clerk: ['', Validators.required],
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
          this._router.navigate(['/clerk']);
        },
        (error) => {
          this.loading = false;
          console.log("Login Error-", error);
        }
      );
  }
    
  getProducts(){
    this.clerkService.getProductBatch()
    .subscribe((response:ProductBatch[])=> {
      this.products = response
      console.log(this.products)
    })
  }

}


