import { Injectable } from '@angular/core';
import { IUserData } from './api/services/users.interface';
import { Resolve } from '@angular/router';
import { UsersApiService } from './api/services/users-api.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { LOGGED_USER_ID } from './consts';

@Injectable()
export class UserDataResolverService implements Resolve<IUserData> {

  private currentUserData: IUserData;

  constructor(private userApiService: UsersApiService) { }

  resolve(): Observable<IUserData> {
    return this.userApiService.getUserById(LOGGED_USER_ID).pipe(take(1));
  }
}
