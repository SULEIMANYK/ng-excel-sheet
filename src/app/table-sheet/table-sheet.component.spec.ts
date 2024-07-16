import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSheetComponent } from './table-sheet.component';

describe('TableSheetComponent', () => {
  let component: TableSheetComponent;
  let fixture: ComponentFixture<TableSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
