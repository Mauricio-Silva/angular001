import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student/service';

@Component({
  selector: 'app-student-form-delete',
  templateUrl: './student-form-delete.component.html',
  styleUrls: ['./student-form-delete.component.css']
})
export class StudentFormDeleteComponent implements OnInit {

  studentsList = this.studentService.GetAllStudents().map(student => [student.id, student.name]);
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