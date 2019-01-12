import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoftasksComponent } from './listoftasks.component';

describe('ListoftasksComponent', () => {
  let component: ListoftasksComponent;
  let fixture: ComponentFixture<ListoftasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoftasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoftasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
