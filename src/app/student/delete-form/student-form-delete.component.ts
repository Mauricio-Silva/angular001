import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../core/services/student.service';


@Component({
  selector: 'app-student-form-delete',
  templateUrl: './student-form-delete.component.html',
  styleUrls: ['./student-form-delete.component.css']
})
export class StudentFormDeleteComponent {

  public studentForm: FormGroup;
  public student_id: number = 0;
  public studentsList: (number|string)[][] = [];


  constructor(
    private studentService: StudentService,
    private form: FormBuilder,
  ) { 
    this.studentForm = this.form.group({
      student_id: 0
    });
  }

  getAllStudents(): void {
    this.studentService.findAll().subscribe(students => this.studentsList = students.map(student => [student.id, student.name]));
  }

  deleteStudent() {
    console.log(this.student_id);
    this.student_id = this.studentForm.get('student_id')?.value;
    console.log(this.student_id);
    this.studentService.delete(this.student_id);
  }
}