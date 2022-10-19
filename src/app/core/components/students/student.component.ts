import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { StudentInsertDialogComponent } from '../student-insert-dialog/student-insert-dialog.component';



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
    this.getStudents()
  }

  selectStudent(student: Student): void {
    this.selectedStudent = student;
  }

  getStudents(): void {
    this.dataSource = [...this.studentService.getAllStudents()];
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
        let student = new Student(id, 'HAHA', 22, 5, 5.7)
        this.studentService.addStudent(student).subscribe((students) => {
          this.dataSource = students;
        });
        this.table.renderRows();
      }
    });
  }
}

