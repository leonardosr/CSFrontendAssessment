import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridSearchComponent } from './data-grid-search.component';

describe('DataGridSearchComponent', () => {
  let component: DataGridSearchComponent;
  let fixture: ComponentFixture<DataGridSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
