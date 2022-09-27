import { StudentFormCreateComponent } from './../student-form-create/student-form-create.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from './student';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { StudentService } from './student.service';
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

  columns: string[] = ['ID', 'Nome', 'Email', 'Idade', 'Nota1', 'Nota2', 'Média', 'Situação'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<Student>;


  showStudentInformation(student: Student) {
    this.dialog.open(StudentDialogComponent, {
      data: student,
    });
  }
  showDeleteStudentForm() {
    this.dialog.open(StudentFormDeleteComponent);
    this.table.renderRows();
    this.dataSource = new MatTableDataSource(this.studentService.GetAllStudents());
  }
  showCreateStudentForm() {
    this.dialog.open(StudentFormCreateComponent);
    this.table.renderRows();
    this.dataSource = new MatTableDataSource(this.studentService.GetAllStudents());
  }




  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  ngOnInit(): void {
  }
}
