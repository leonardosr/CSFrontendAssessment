import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IdataGridConfig, IdataGridColumn } from '../data-grid.interface';
import { IGetRequestParams } from 'src/app/core/api/services/requests.interface';
import { faCaretDown, faCaretUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ROUTES } from 'src/app/core/consts';
import { Router } from '@angular/router';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent {

  @Input() gridConfig: IdataGridConfig;
  @Input() gridData: any;
  @Input() totalCount: string;
  @Input() pageSize: number; 
  @Output() refreshData = new EventEmitter<IGetRequestParams>();

  public routes = ROUTES;

  public faCaretDown: IconDefinition = faCaretDown;
  public faCaretUp: IconDefinition = faCaretUp;

  public getRequestParams: IGetRequestParams = {
    page: '1',
    pageSize: '10',
    sortBy: 'Id',
    desc: false,
    searchString: ''
  }

  constructor(private router: Router) { }

  public onPageChange(currentPage: string) {
    this.getRequestParams.page = currentPage;
    this.refreshData.emit(this.getRequestParams);
  }

  public onSearch(searchString: string) {
    this.getRequestParams.searchString = searchString;
    this.refreshData.emit(this.getRequestParams);
  }

  public sortBy(columnId: string) {

    if (this.getRequestParams.sortBy === columnId) {
      this.getRequestParams.desc = !this.getRequestParams.desc;
    }

    this.getRequestParams.sortBy = columnId;
    this.refreshData.emit(this.getRequestParams);
  }

  public handleRowClick(registerId: number) {
    this.router.navigate([`/${ROUTES.form}/${registerId}`]);
  }

}
