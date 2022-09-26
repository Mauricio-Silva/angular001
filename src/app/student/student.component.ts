import { StudentFormCreateComponent } from './../student-form-create/student-form-create.component';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from './service';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { StudentFormDeleteComponent } from '../student-form-delete/student-form-delete.component';
// cSpell:disable


const COLUMNS = [
  { attribute: 'id', name: 'ID', value: (element: Student) => `${element.id}` },
  { attribute: 'name', name: 'Nome', value: (element: Student) => `${element.name}` },
  { attribute: 'email', name: 'Email', value: (element: Student) => `${element.email}` },
  { attribute: 'age', name: 'Idade', value: (element: Student) => `${element.age}` },
  { attribute: 'note1', name: 'Nota1', value: (element: Student) => `${element.note1}` },
  { attribute: 'note2', name: 'Nota2', value: (element: Student) => `${element.note2}` },
  { attribute: 'average', name: 'Média', value: (element: Student) => `${element.average}` },
  { attribute: 'status', name: 'Situação', value: (element: Student) => `${element.status}` },
];


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  constructor(
    private studentService: StudentService,
    public dialog: MatDialog,
  ) { }


  columns = COLUMNS;
  displayedColumns = COLUMNS.map(student => student.attribute);
  dataSource = new MatTableDataSource(this.studentService.GetAllStudents());


  showStudentInformation(student: Student) {
    this.dialog.open(StudentDialogComponent, {
      data: student,
    });
  }
  showDeleteStudentForm() {
    this.dialog.open(StudentFormDeleteComponent);
  }
  showCreateStudentForm() {
    this.dialog.open(StudentFormCreateComponent);
  }


  ngOnInit(): void {
  }
}
