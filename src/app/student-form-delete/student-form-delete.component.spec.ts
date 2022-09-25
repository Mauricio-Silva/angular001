import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormDeleteComponent } from './student-form-delete.component';

describe('StudentFormDeleteComponent', () => {
  let component: StudentFormDeleteComponent;
  let fixture: ComponentFixture<StudentFormDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
