import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelComponent } from './rappel.component';

describe('RappelComponent', () => {
  let component: RappelComponent;
  let fixture: ComponentFixture<RappelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RappelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
