import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material/material.module';
import { StudentComponent } from './students/student.component';
import { StudentInsertDialogComponent } from './student-insert-dialog/student-insert-dialog.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StartComponent } from './start/start.component';
import { HeroesComponent } from './heroes/heroes.component';



const COMPONENTS = [
    StartComponent,
    HeroesComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentInsertDialogComponent,
];

@NgModule({
  declarations: [COMPONENTS, StudentInsertDialogComponent, StudentDetailComponent, StartComponent],
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
