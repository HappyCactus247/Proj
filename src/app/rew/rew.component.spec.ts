import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewComponent } from './rew.component';

describe('RewComponent', () => {
  let component: RewComponent;
  let fixture: ComponentFixture<RewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
