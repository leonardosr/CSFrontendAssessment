import { Component, OnInit, Input } from '@angular/core';
import { timestampToDate } from 'src/app/utils/utils';

@Component({
  selector: '[data-grid-list-item]',
  templateUrl: './data-grid-list-item.component.html',
  styleUrls: ['./data-grid-list-item.component.scss']
})
export class DataGridListItemComponent implements OnInit {

  public timestampToDate = timestampToDate;

  @Input() listItemData: any;
  @Input() columnConfig: any;

  constructor() { }

  ngOnInit() {

  }

}
