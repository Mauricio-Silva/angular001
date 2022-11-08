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
  doTasks: Task[] = [];
  doingTasks: Task[] = [];
  doneTasks: Task[] = [];



  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
  ) { }


  updateDatasource(): void {
    this.doTasks = this.dataSource.filter(task => task.status == 'do')
    this.doingTasks = this.dataSource.filter(task => task.status == 'doing')
    this.doneTasks = this.dataSource.filter(task => task.status == 'done')
  }


  ngOnInit(): void {
    this.taskService.findAll().subscribe(
      {
        next: (tasks) => {
          this.dataSource = tasks;
          this.updateDatasource();
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
            this.updateDatasource();
          });
        });
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
        this.updateDatasource();
      }
    });
  }


  showTaskDetail(task: Task): void {
    this.dialog.open(TaskDetailDialogComponent, { data: task });
  }
}