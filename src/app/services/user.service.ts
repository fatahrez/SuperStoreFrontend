import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models/user.model';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) { }

  private httpOptions = {  headers: new HttpHeaders({'Content-Type': 'application/json'})}

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.get('/auth/user')
        .subscribe(
          data => this.setAuth(data.user),
          err => this.purgeAuth()
        );
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  attemptRegister(type, credentials): Observable<User> {
    const route = (type === 'register') ? '/register/' : '/merchant';
    return this.apiService.post('' + route, {user: credentials})
    .pipe(
      map(
        data => {
          this.setAuth(data.user);
          return data;
        }
      )
    );
  }




  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login/' : '/merchant';
    return this.apiService.post('' + route, {user: credentials})
    .pipe(
      map(
        data => {
          this.setAuth(data.user);
          return data;
        }
      )
    );
  }




  attemptRegisterManager(type, credentials): Observable<User> {
    const route = (type === 'manager-register') ? '/register-manager/' : '/manager';
    return this.apiService.post('' + route, {user: credentials})
    .pipe(
      map(
        data => {
          this.setAuth(data.user);
          return data;
        }
      )
    );
  }

  attemptManager(type, credentials): Observable<User> {
    const route = (type === 'manager-login') ? '/login/' : '/manager';
    return this.apiService.post('' + route, {user: credentials})
    .pipe(
      map(
        data => {
          this.setAuth(data.user);
          return data;
        }
      )
    );
  }


  attemptRegisterClerk(type, credentials): Observable<User> {
    const route = (type === 'clerk-register') ? '/register-clerk/' : '/clerk';
    return this.apiService.post('' + route, {user: credentials})
    .pipe(
      map(
        data => {
          this.setAuth(data.user);
          return data;
        }
      )
    );
  }


  


  attemptClerk(type, credentials): Observable<User> {
    const route = (type === 'clerk-login') ? '/login/' : '/clerk';
    return this.apiService.post('' + route, {user: credentials})
    .pipe(
      map(
        data => {
          this.setAuth(data.user);
          return data;
        }
      )
    );
  }


  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  
}
