import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractDemoComponent } from './abstract-demo.component';

describe('AbstractDemoComponent', () => {
  let component: AbstractDemoComponent;
  let fixture: ComponentFixture<AbstractDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
