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

  }
