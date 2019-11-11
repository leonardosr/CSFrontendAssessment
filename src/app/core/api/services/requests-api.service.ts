import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IRequestData, IGetRequestParams } from './requests.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestsApiService {

  constructor(private http: HttpClient) { }

  public getRequestList(getRequestParams: IGetRequestParams): Observable<HttpResponse<IRequestData[]>> {

    let fromString = `_page=${getRequestParams.page}&_limit=${getRequestParams.pageSize}`;

    if(getRequestParams.sortBy) {
      fromString += `&_sort=${getRequestParams.sortBy}`;
    }

    if(getRequestParams.desc) {
      fromString += `&_order=desc`;
    } else {
      fromString += `&_order=asc`;
    }

    if(getRequestParams.searchString) {
      fromString += `&q=${getRequestParams.searchString}`;
    }

    const params = new HttpParams({fromString});

    return this.http.get<IRequestData[]>(`${environment.apiUrl}/Requests`, { observe: 'response', params });
  }

  public getRequestById(requestId: string): Observable<IRequestData> {
    return this.http.get<IRequestData>(`${environment.apiUrl}/Requests/${requestId}`);
  }

  public addNewRequest(newRequestParams: IRequestData) {
    return this.http.post<IRequestData>(`${environment.apiUrl}/Requests`, newRequestParams);
  }

  public updateRequest(updateRequestParams: IRequestData, requestId: number) {
    return this.http.put<IRequestData>(`${environment.apiUrl}/Requests/${requestId}`, updateRequestParams);
  }

}
