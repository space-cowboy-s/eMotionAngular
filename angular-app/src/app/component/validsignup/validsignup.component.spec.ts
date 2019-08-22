import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidsignupComponent } from './validsignup.component';

describe('ValidsignupComponent', () => {
  let component: ValidsignupComponent;
  let fixture: ComponentFixture<ValidsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
