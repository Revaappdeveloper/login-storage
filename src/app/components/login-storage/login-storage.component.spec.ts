import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStorageComponent } from './login-storage.component';

describe('LoginStorageComponent', () => {
  let component: LoginStorageComponent;
  let fixture: ComponentFixture<LoginStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
