import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'data-grid-pagination',
  templateUrl: './data-grid-pagination.component.html',
  styleUrls: ['./data-grid-pagination.component.scss']
})
export class DataGridPaginationComponent {

  @Input() collectionSize: number;
  @Input() currentPage: number;
  @Input() pageSize: number; 
  @Output() pageChange = new EventEmitter<number>();

  public math = Math;

  constructor() { }

  public onPageChange(): void {
    const pageCount: number = this.math.ceil(this.collectionSize / this.pageSize);
    console.log(pageCount);
    if(this.currentPage === 0) {
      this.currentPage = 1;
    } else if (this.currentPage > pageCount) {
      this.currentPage = pageCount;
    }
    this.pageChange.emit(this.currentPage);
  }

}
