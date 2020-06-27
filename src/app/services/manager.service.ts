import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { log } from 'util';
import { Merchant } from '../models/merchant.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<Merchant[]> {
    return this.apiService.get(`/manager/`)
      .pipe(tap(_ => log(`fetched managers`)), map(data => {
        return data;
      }));
  }

  get(slug): Observable<Merchant> {
    return this.apiService.get(`/manager/` + slug + `/`)
      .pipe(map(data => data.merchant));
  }
}
