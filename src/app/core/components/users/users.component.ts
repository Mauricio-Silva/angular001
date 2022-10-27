import { UserDetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { User } from '../../models/user';
import { UserInsertDialogComponent } from './insert-dialog/insert-dialog.component';
import { UserRemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSource: User[] = [];

  @ViewChild(MatTable) table!: MatTable<User>;
  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'status', 'confirmationToken', 'salt', 'createAt', 'updateAt', 'task'];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe((users) => {
      this.dataSource = users;
    });
  }


  showUserCreateForm(): void {
    const dialogRef = this.dialog.open(UserInsertDialogComponent, {
      width: '300px',
      data: { },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log(result);
        this.userService.create(result).subscribe((x) => {
          console.log(x);
          this.userService.findAll().subscribe((users) => {
            this.dataSource = users;
          });
        });
        this.table.renderRows();
      }
    });
  }


  showUserRemoveForm(): void {
    const dialogRef = this.dialog.open(UserRemoveDialogComponent, {
      width: '300px',
      data: this.dataSource.map(user => [user.id, user.name]),
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log(result);
        this.dataSource = this.dataSource.filter(user => user.id != result);
        this.table.renderRows();
      }
    });
  }


  showUserDetail(user: User): void {
    this.dialog.open(UserDetailDialogComponent, {
      width: '300px',
      data: user,
    });
  }
}
