import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyEffectsComponent } from './lobby-effects.component';

describe('LobbyEffectsComponent', () => {
  let component: LobbyEffectsComponent;
  let fixture: ComponentFixture<LobbyEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobbyEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
