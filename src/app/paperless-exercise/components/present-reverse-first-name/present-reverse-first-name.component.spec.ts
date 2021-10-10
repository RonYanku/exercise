import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentReverseFirstNameComponent } from './present-reverse-first-name.component';

describe('PresentReverseFirstNameComponent', () => {
  let component: PresentReverseFirstNameComponent;
  let fixture: ComponentFixture<PresentReverseFirstNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentReverseFirstNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentReverseFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
