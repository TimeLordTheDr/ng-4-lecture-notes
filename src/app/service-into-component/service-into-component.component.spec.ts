import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIntoComponentComponent } from './service-into-component.component';

describe('ServiceIntoComponentComponent', () => {
  let component: ServiceIntoComponentComponent;
  let fixture: ComponentFixture<ServiceIntoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceIntoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIntoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
