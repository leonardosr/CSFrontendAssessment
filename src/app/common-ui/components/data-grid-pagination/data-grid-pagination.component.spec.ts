import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridPaginationComponent } from './data-grid-pagination.component';

describe('DataGridPaginationComponent', () => {
  let component: DataGridPaginationComponent;
  let fixture: ComponentFixture<DataGridPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
