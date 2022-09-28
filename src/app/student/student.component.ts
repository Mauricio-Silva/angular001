import { StudentFormCreateComponent } from './../student-form-create/student-form-create.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from './student';
import { MatTable } from '@angular/material/table';
import { StudentService } from './student.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { StudentFormDeleteComponent } from '../student-form-delete/student-form-delete.component';
// cSpell:disable


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

  dataSource = [...this.studentService.GetAllStudents()];  
  // attributes: string[] = ['ID', 'Nome', 'Email', 'Idade', 'Nota1', 'Nota2', 'Média', 'Situação'];
  displayedColumns: string[] = ['id', 'name', 'email', 'age', 'note1', 'note2', 'average', 'status']

  // @ViewChild(MatTable) table!: MatTable<Student>;


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

  updateDataSource() {
    console.log('OK');
    this.dataSource = [...this.studentService.GetAllStudents()];
    console.log(this.dataSource);
    // this.table.renderRows();
  }

  ngOnInit(): void {
  }
}
