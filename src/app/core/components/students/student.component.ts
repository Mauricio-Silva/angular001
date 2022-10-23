import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { StudentInsertDialogComponent } from '../student-insert-dialog/student-insert-dialog.component';
import { StudentRemoveDialogComponent } from '../student-remove-dialog/student-remove-dialog.component';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  selectedStudent?: Student;
  id?: number;
  name?: string;
  dataSource: Student[] = [];
  clickedRows = new Set<Student>();

  @ViewChild(MatTable) table!: MatTable<Student>;
  displayedColumns: string[] = ['id', 'name', 'email', 'age', 'note1', 'note2', 'average', 'status'];

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog,
  ) { }



  ngOnInit(): void {
    this.dataSource = [...this.studentService.getAllStudents()];
  }

  selectStudent(student: Student): void {
    this.selectedStudent = student;
  }

  showCreateStudentForm(): void {
    const dialogRef = this.dialog.open(StudentInsertDialogComponent, {
      width: '300px',
      data: { id: this.id, name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {

        console.log(result);
        
        let id = this.studentService.getMaximumId() + 1;
        let student = new Student(id, result.name, result.age, Number(result.note1), Number(result.note2))
        this.studentService.addStudent(student).subscribe((students) => {
          this.dataSource = students;
        });
        this.table.renderRows();
      }
    });
  }

  showRemoveStudentForm(): void {
    const dialogRef = this.dialog.open(StudentRemoveDialogComponent, {
      width: '300px',
      data: this.dataSource.map(student => [student.id, student.name]),
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {

        console.log(result);

        this.dataSource = this.dataSource.filter(student => student.id != result);
        this.table.renderRows();
      }
    });
  }
}

