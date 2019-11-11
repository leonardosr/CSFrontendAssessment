import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUserData } from './users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  public cachedUserData: IUserData[];

  constructor(private http: HttpClient) { }

  public getUserList(): Observable<IUserData[]> {
    return this.http.get<IUserData[]>(`${environment.apiUrl}/Users`);
  }

  public getUserById(userId: number): Observable<IUserData> {
    return this.http.get<IUserData>(`${environment.apiUrl}/Users/${userId}`);
  }

}
