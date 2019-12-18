import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PavlichenkoLudmilaMihailovnaComponent } from './pavlichenko-ludmila-mihailovna.component';

describe('PavlichenkoLudmilaMihailovnaComponent', () => {
  let component: PavlichenkoLudmilaMihailovnaComponent;
  let fixture: ComponentFixture<PavlichenkoLudmilaMihailovnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PavlichenkoLudmilaMihailovnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PavlichenkoLudmilaMihailovnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
