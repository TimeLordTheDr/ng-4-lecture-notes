import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2viewBindingComponent } from './component2view-binding.component';

describe('Component2viewBindingComponent', () => {
  let component: Component2viewBindingComponent;
  let fixture: ComponentFixture<Component2viewBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2viewBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2viewBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
