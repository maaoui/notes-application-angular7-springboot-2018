import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellouserComponent } from './hellouser.component';

describe('HellouserComponent', () => {
  let component: HellouserComponent;
  let fixture: ComponentFixture<HellouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
