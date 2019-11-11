import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridListItemComponent } from './data-grid-list-item.component';

describe('DataGridListItemComponent', () => {
  let component: DataGridListItemComponent;
  let fixture: ComponentFixture<DataGridListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
