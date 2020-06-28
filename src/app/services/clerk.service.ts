import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ProductBatch } from '../models/product.model';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClerkService {

  constructor(
  private apiService: ApiService,
  private http: HttpClient,
 ){}

    postProductBatch(batch:ProductBatch):Observable<ProductBatch> {
      const route = '/api/product-batch/'
      console.log(batch)
      return this.apiService.post('' + route, batch)
        .pipe(
          map(
            data => {
              return data;
            }
          )
        );
    }
  


  getProductBatch():Observable<ProductBatch[]> {
    const route = '/api/product-batch/'
    return this.apiService.get('' + route)
      .pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }
}


