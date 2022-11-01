import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-insert-dialog',
  templateUrl: './insert-dialog.component.html',
  styleUrls: ['./insert-dialog.component.css']
})
export class TaskInsertDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TaskInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  validateForm(): void {
    let value = this.data.description;
    let checker: boolean = true;
    value = String(value);
    if (value == null || value == undefined || value == "" || value.length == 0 || /^\s*$/.test(value)) {
      checker = false;
    }
    if (checker) {
      this.dialogRef.close(this.data);   
    }
  }
}