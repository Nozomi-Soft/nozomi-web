import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertErrorComponent } from './alert-error.component';
import { AlertSuccessComponent } from './alert-success.component';
import { AlertWarningComponent } from './alert-warning.component';

@NgModule({
  declarations: [
    AlertErrorComponent,
    AlertSuccessComponent,
    AlertWarningComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    AlertErrorComponent,
    AlertSuccessComponent,
    AlertWarningComponent
  ]
})
export class SharedModule { }
