import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';



const COMPONENTS = [
  ReactiveFormsModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatSliderModule,
  MatSelectModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
]

@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class MaterialModule { }
