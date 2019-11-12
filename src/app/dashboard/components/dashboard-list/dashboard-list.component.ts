import { Component, OnInit, OnDestroy } from '@angular/core';
import { IdataGridConfig, IdataGridColumn } from 'src/app/common-ui/components/data-grid.interface';
import { ACTIVE_ITEMS_COLUMNS_CONFIG } from './active-items-grid-config';
import { RequestsApiService } from 'src/app/core/api/services/requests-api.service';
import { IRequestData, IGetRequestParams } from 'src/app/core/api/services/requests.interface';
import { ROUTES } from 'src/app/core/consts';

const PAGE_SIZE: string = '10';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  public pageSize = PAGE_SIZE;
  public routes = ROUTES;

  public gridConfig: IdataGridConfig = {
    gridTitle: 'Request List',
    columnConfig: ACTIVE_ITEMS_COLUMNS_CONFIG,    
  };
  
  public gridData: IRequestData[] = [];
  public totalCount: string;

  public getRequestParam: IGetRequestParams = {
    page: '1',
    pageSize: '10',
    sortBy: 'Id',
    desc: false,
    searchString: ''
  }

  constructor(private requestApi: RequestsApiService) {
  }

  ngOnInit(): void {
    this.getGridData(this.getRequestParam);
  }

  public getGridData(params: IGetRequestParams) {

    this.getRequestParam = params;

    const subscription = this.requestApi.getRequestList(this.getRequestParam).subscribe(
        ({ body, headers }) => {
          this.gridData = body;
          this.totalCount = headers.get('X-Total-Count');
          subscription.unsubscribe();
        }
      );
  }

}
