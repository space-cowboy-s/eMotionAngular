import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommandComponent } from './listcommand.component';

describe('ListcommandComponent', () => {
  let component: ListcommandComponent;
  let fixture: ComponentFixture<ListcommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
