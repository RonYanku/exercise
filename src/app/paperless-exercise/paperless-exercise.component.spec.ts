import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlessExerciseComponent } from './paperless-exercise.component';

describe('PaperlessExerciseComponent', () => {
  let component: PaperlessExerciseComponent;
  let fixture: ComponentFixture<PaperlessExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
