import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q101Component } from './q101.component';

describe('Q101Component', () => {
  let component: Q101Component;
  let fixture: ComponentFixture<Q101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Q101Component]
    });
    fixture = TestBed.createComponent(Q101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
