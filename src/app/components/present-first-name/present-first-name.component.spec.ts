import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentFirstNameComponent } from './present-first-name.component';

describe('PresentFirstNameComponent', () => {
  let component: PresentFirstNameComponent;
  let fixture: ComponentFixture<PresentFirstNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentFirstNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
