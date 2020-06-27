import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { log } from 'util';
import { Merchant } from '../models/merchant.model';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<Merchant[]> {
    return this.apiService.get(`/merchant/`)
      .pipe(tap(_ => log(`fetched merchants`)), map(data => {
        return data;
      }));
  }

  get(slug): Observable<Merchant> {
    return this.apiService.get(`/merchant/` + slug + `/`)
      .pipe(map(data => data.merchant));
  }
}


