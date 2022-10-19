import { Test2Component } from './test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



const COMPONENTS = [
  Test2Component
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule, MaterialModule, FormsModule
  ],
  exports: [COMPONENTS],
})
export class TestModule { }
