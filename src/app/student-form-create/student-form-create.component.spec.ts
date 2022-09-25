import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormCreateComponent } from './student-form-create.component';

describe('StudentFormCreateComponent', () => {
  let component: StudentFormCreateComponent;
  let fixture: ComponentFixture<StudentFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFormCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
