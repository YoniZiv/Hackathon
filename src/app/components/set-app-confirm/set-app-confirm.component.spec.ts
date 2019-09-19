import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAppConfirmComponent } from './set-app-confirm.component';

describe('SetAppConfirmComponent', () => {
  let component: SetAppConfirmComponent;
  let fixture: ComponentFixture<SetAppConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAppConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAppConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
