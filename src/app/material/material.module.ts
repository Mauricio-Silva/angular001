import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';



const COMPONENTS = [
  MatTableModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSliderModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class MaterialModule { }
