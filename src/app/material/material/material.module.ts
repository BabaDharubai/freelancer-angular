import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatIconModule}from '@angular/material/icon';
import{ MatButtonModule}from '@angular/material/button'
import{ MatToolbarModule}from '@angular/material/toolbar';
import{ MatTableModule}from '@angular/material/table'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
    
  ],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class MaterialModule { }
