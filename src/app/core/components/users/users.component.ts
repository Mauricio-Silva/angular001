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
  displayedColumns: string[] = ['id', 'name', 'email', 'status', 'createAt', 'updateAt'];


  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.userService.findAll().subscribe(
      {
        next: (users) => {
          this.dataSource = users;
        },
        error: (e) => {
          console.error(e);
        }
      }
    );
  }


  showUserCreateForm(): void {
    const dialogRef = this.dialog.open(UserInsertDialogComponent, { 
      width: '350px', 
      data: {} 
    });
    dialogRef.afterClosed().subscribe((user) => {
      if (user !== undefined) {
        this.userService.create(user).subscribe(() => {
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
      width: '350px',
      data: this.dataSource.map(user => [user.id, user.name]),
    });
    dialogRef.afterClosed().subscribe((id) => {
      if (id !== undefined) {
        this.dataSource = this.dataSource.filter(user => user.id != id);
        this.table.renderRows();
      }
    });
  }


  showUserDetail(user: User): void {
    this.dialog.open(UserDetailDialogComponent, { data: user });
  }
}
