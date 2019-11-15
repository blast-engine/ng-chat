import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEffectsComponent } from './auth-effects.component';

describe('AuthEffectsComponent', () => {
  let component: AuthEffectsComponent;
  let fixture: ComponentFixture<AuthEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
