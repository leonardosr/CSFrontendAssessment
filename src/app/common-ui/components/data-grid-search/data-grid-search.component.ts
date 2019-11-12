import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'data-grid-search',
  templateUrl: './data-grid-search.component.html',
  styleUrls: ['./data-grid-search.component.scss']
})
export class DataGridSearchComponent implements OnInit {

  public searchString: string;
  public faSearch: IconDefinition = faSearch;

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onKey({code}): void {
    if(code === 'Enter') {
      this.search.emit(this.searchString);
    }
  }

}
