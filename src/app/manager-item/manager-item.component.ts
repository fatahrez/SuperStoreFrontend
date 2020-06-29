import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-manager-item',
  templateUrl: './manager-item.component.html',
  styleUrls: ['./manager-item.component.css']
})
export class ManagerItemComponent implements OnInit {
  itemForm: FormGroup;
  loading = false;  // loader while awaiting response
  submitted = false;
  items: Item[]


  constructor(
    private managerService : ManagerService,
    private fb: FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.buildItem() 
    this.getItem()
  }
  
  buildItem = () => {
    this.itemForm = this.fb.group({
      item_name: ['', Validators.required],
      quantity: ['', [Validators.required]],
      shop: ['', Validators.required],
      damaged_items:['', Validators.required],
  
  });
}

  get field() {
    return this.itemForm.controls;
  }

  addItem = () => {
    this.submitted = true
    if (this.itemForm.invalid) {
      return ;
    }

    this.loading = true;
    this.itemForm.value.quantity = parseInt(this.itemForm.value.quantity)
   

    console.log("Form - ", this.itemForm.value);
    this.managerService.postItem(this.itemForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("Item data-", data);
          this.loading = false;
          this._router.navigate(['/manager-item']);
        },
        (error) => {
          this.loading = false;
          console.log("Login Error-", error);
        }
      );
  }
    
  getItem(){
    this.managerService.getItem()
    .subscribe((response:Item[])=> {
      this.items = response
      console.log(this.items)
    })
  }

}






