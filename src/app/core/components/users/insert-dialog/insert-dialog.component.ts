import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { User } from 'src/app/core/models/user';


@Component({
  selector: 'app-insert-dialog',
  templateUrl: './insert-dialog.component.html',
  styleUrls: ['./insert-dialog.component.css']
})
export class UserInsertDialogComponent {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<UserInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  validateForm(): void {
    // let values = [this.data.name, this.data.email, this.data.password];
    // let checker: boolean = true;
    // values.forEach((value) => {
    //   value = String(value);
    //   if (value == null || value == undefined || value == "" || value.length == 0 || /^\s*$/.test(value)) {
    //     checker = false;
    //   }
    // })
    // if (checker) {
    //   this.dialogRef.close(this.data);   
    // }
    
    this.dialogRef.close(this.userForm.value);   
  }
}