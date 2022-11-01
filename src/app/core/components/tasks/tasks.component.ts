import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { TaskInsertDialogComponent } from './insert-dialog/insert-dialog.component';
import { TaskRemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import { TaskDetailDialogComponent } from './detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  dataSource: Task[] = [];

  @ViewChild(MatTable) table!: MatTable<Task>;
  displayedColumns: string[] = ['id', 'description', 'status'];


  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.taskService.findAll().subscribe(
      {
        next: (tasks) => {
          this.dataSource = tasks;
        },
        error: (e) => {
          console.error(e);
        }
      }
    );
  }


  showTaskCreateForm(): void {
    const dialogRef = this.dialog.open(TaskInsertDialogComponent, { 
      width: '500px', 
      data: {} 
    });
    dialogRef.afterClosed().subscribe((task) => {
      if (task !== undefined) {
        this.taskService.create(task).subscribe(() => {
          this.taskService.findAll().subscribe((tasks) => {
            this.dataSource = tasks;
          });
        });
        this.table.renderRows();
      }
    });
  }


  showTaskRemoveForm(): void {
    const dialogRef = this.dialog.open(TaskRemoveDialogComponent, {
      width: '500px',
      data: this.dataSource.map(task => [task.id, task.description]),
    });
    dialogRef.afterClosed().subscribe((id) => {
      if (id !== undefined) {
        this.dataSource = this.dataSource.filter(task => task.id != id);
        this.table.renderRows();
      }
    });
  }


  showTaskDetail(task: Task): void {
    this.dialog.open(TaskDetailDialogComponent, { data: task });
  }
}
