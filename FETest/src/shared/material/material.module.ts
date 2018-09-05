import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
} from '@angular/material';

const imports = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
];

@NgModule({ imports, exports: imports })

export class MaterialModule { }

