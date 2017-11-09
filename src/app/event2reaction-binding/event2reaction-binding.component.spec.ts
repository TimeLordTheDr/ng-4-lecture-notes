import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Event2reactionBindingComponent } from './event2reaction-binding.component';

describe('Event2reactionBindingComponent', () => {
  let component: Event2reactionBindingComponent;
  let fixture: ComponentFixture<Event2reactionBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event2reactionBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Event2reactionBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
