import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-insert-dialog',
  templateUrl: './student-insert-dialog.component.html',
  styleUrls: ['./student-insert-dialog.component.css']
})
export class StudentInsertDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<StudentInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
  ) { }

  onNoClick(): void {
    this.dialogRef.close()
  }
}
