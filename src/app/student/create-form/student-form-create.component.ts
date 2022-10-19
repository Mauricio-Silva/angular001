import { StudentComponent } from '../main/student.component';
import { StudentService } from '../../core/services/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../core/models/student';


@Component({
  selector: 'app-student-form-create',
  templateUrl: './student-form-create.component.html',
  styleUrls: ['./student-form-create.component.css']
})
export class StudentFormCreateComponent {

  public studentForm: FormGroup;
  student_id: number = 0;
  student_name: string = "";
  student_age: number = 0;
  student_note1: number = 0;
  student_note2: number = 0;


  constructor(
    private studentService: StudentService,
    private studentComponent: StudentComponent,
    private form: FormBuilder,
  ) { 
    this.studentForm = this.form.group({
      student_id: 0,
      student_name: "",
      student_age: 0,
      student_note1: 0,
      student_note2: 0,
    });
  }





  saveStudent() {
    this.student_name = this.studentForm.get('student_name')?.value;
    this.student_age = this.studentForm.get('student_age')?.value;
    this.student_note1 = this.studentForm.get('student_note1')?.value;
    this.student_note2 = this.studentForm.get('student_note2')?.value;
    let studentsIds: number[] = []
    this.studentService.findAll().subscribe(students => studentsIds = students.map(student => student.id));
    const max_student_id = Math.max(...studentsIds);
    this.student_id = max_student_id + 1;

    console.log(this.student_id, this.student_name, this.student_age, this.student_note1, this.student_note2);
    
    const student = new Student(this.student_id, this.student_name, this.student_age, this.student_note1, this.student_note2)
    // this.studentService.save(student);
    this.studentComponent.CreateNewStudent(student);
  }



}