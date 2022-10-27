import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.css']
})
export class UserRemoveDialogComponent {
  selectedValue?: string;

  constructor(
    public dialogRef: MatDialogRef<UserRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [string, string][],
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  removeUser(): void {
    this.dialogRef.close(this.selectedValue);
  }
}
