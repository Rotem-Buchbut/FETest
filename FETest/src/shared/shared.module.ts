import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


const imports = [
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
];



@NgModule({ imports, exports: imports })

export class SharedModule { }
