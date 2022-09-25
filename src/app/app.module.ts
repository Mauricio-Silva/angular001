import { StudentService } from './student/service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { StudentComponent } from './student/student.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { StudentFormDeleteComponent } from './student-form-delete/student-form-delete.component';
import { StudentFormCreateComponent } from './student-form-create/student-form-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    StudentComponent,
    StudentDialogComponent,
    StudentFormDeleteComponent,
    StudentFormCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [StudentService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
