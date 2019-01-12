import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeconectedComponent } from './homeconected.component';

describe('HomeconectedComponent', () => {
  let component: HomeconectedComponent;
  let fixture: ComponentFixture<HomeconectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeconectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeconectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
