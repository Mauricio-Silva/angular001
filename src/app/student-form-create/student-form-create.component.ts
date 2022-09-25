import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student/service';

@Component({
  selector: 'app-student-form-create',
  templateUrl: './student-form-create.component.html',
  styleUrls: ['./student-form-create.component.css']
})
export class StudentFormCreateComponent implements OnInit {

  public studentForm: FormGroup;
  student_id: number = 0;


  constructor(
    private studentService: StudentService,
    private form: FormBuilder,
  ) { 
    this.studentForm = this.form.group({
      student_id: 0
    });
  }


  deleteStudent() {
    console.log(this.student_id);
    this.student_id = this.studentForm.get('student_id')?.value;
    console.log(this.student_id);
    this.studentService.DeleteStudent(this.student_id);
  }

  ngOnInit(): void {
  }
}