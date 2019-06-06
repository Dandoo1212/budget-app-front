import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReceiptsComponent } from './get-receipts.component';

describe('GetReceiptsComponent', () => {
  let component: GetReceiptsComponent;
  let fixture: ComponentFixture<GetReceiptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetReceiptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
