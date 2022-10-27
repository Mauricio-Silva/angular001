import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-remove-dialog',
  templateUrl: './student-remove-dialog.component.html',
  styleUrls: ['./student-remove-dialog.component.css']
})
export class StudentRemoveDialogComponent {
  selectedValue?: string;

  constructor(
    public dialogRef: MatDialogRef<StudentRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [string, string][],
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  removeStudent(): void {
    this.dialogRef.close(this.selectedValue); 
  }
}
