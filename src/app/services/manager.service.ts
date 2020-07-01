import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { log } from 'util';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
      private apiService: ApiService,
      private http: HttpClient,
  ) { }


  postItem(item:Item): Observable<Item> {
    const route = '/api/items/'
    return this.apiService.post('' + route, item)
      .pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }


  getItem(): Observable<Item[]> {
    const route = '/api/items/'
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
