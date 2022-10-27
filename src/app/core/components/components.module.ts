import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material/material.module';
import { StudentComponent } from './students/students.component';
import { StudentInsertDialogComponent } from './students/insert-dialog/student-insert-dialog.component';
import { StudentDetailComponent } from './students/detail-page/student-detail.component';
import { StartComponent } from './start/start.component';
import { HeroesComponent } from './heroes/heroes.component';
import { StudentRemoveDialogComponent } from './students/remove-dialog/student-remove-dialog.component';
import { UsersComponent } from './users/users.component';
import { UserDetailDialogComponent } from './users/detail-dialog/detail-dialog.component';
import { UserInsertDialogComponent } from './users/insert-dialog/insert-dialog.component';
import { UserRemoveDialogComponent } from './users/remove-dialog/remove-dialog.component';



const COMPONENTS = [
    StudentRemoveDialogComponent,
    StudentInsertDialogComponent,
    UserDetailDialogComponent,
    UserInsertDialogComponent,
    UserRemoveDialogComponent,
    StudentDetailComponent,
    StudentComponent,
    HeroesComponent,
    UsersComponent,
    StartComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule, 
    MaterialModule, 
    FormsModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [COMPONENTS],
})
export class ComponentsModule { }
