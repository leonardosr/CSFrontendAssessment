import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DataGridListItemComponent } from './components/data-grid-list-item/data-grid-list-item.component';
import { DataGridPaginationComponent } from './components/data-grid-pagination/data-grid-pagination.component';
import { FormsModule } from '@angular/forms';
import { DataGridSearchComponent } from './components/data-grid-search/data-grid-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [DataGridComponent, DataGridListItemComponent, DataGridPaginationComponent, DataGridSearchComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [DataGridComponent]
})
export class CommonUiModule { }
