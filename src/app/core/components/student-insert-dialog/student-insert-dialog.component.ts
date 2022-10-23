import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-insert-dialog',
  templateUrl: './student-insert-dialog.component.html',
  styleUrls: ['./student-insert-dialog.component.css']
})
export class StudentInsertDialogComponent {
  formValidation: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<StudentInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
  ) { }

  closeDialog(): void {
    this.dialogRef.close()
  }

  validateForm(): void {
    let values = [this.data.name, this.data.age, this.data.note1, this.data.note2];
    let checker: boolean = true;
    values.forEach((value) => {
      value = String(value);
      if (value == null || value == undefined || value == "" || value.length == 0 || /^\s*$/.test(value)) {
        checker = false;
      }
    })
    if (checker) {
      this.dialogRef.close(this.data);   
    }
  }
}
