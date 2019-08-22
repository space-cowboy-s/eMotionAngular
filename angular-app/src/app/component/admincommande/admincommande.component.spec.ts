import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincommandeComponent } from './admincommande.component';

describe('AdmincommandeComponent', () => {
  let component: AdmincommandeComponent;
  let fixture: ComponentFixture<AdmincommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
