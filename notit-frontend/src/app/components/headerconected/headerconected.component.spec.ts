import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderconectedComponent } from './headerconected.component';

describe('HeaderconectedComponent', () => {
  let component: HeaderconectedComponent;
  let fixture: ComponentFixture<HeaderconectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderconectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderconectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
