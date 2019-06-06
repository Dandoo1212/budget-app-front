import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReceiptComponent } from './post-receipt.component';

describe('PostReceiptComponent', () => {
  let component: PostReceiptComponent;
  let fixture: ComponentFixture<PostReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
