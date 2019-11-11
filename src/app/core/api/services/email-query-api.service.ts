import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from './users.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IEmailQuery } from './email-query.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailQueryApiService {

  constructor(private http: HttpClient) { }

  public newEmailQuery(emailQueryData: IEmailQuery): Observable<IEmailQuery> {
    return this.http.post<IEmailQuery>(`${environment.apiUrl}/EmailQueries`, emailQueryData);
  }
}
