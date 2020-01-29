import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule
} from '@angular/material';
 
const modules = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule ];

@NgModule({ 
    imports: [ modules ],
    declarations: [],
    exports: [ modules ]
})

export class MaterialModule {}