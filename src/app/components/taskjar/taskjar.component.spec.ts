import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskjarComponent } from './taskjar.component';

describe('TaskjarComponent', () => {
  let component: TaskjarComponent;
  let fixture: ComponentFixture<TaskjarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskjarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskjarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
