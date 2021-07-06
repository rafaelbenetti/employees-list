import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgePipe } from './pipes/age.pipe';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AgePipe
  ],
  imports: [
    RouterModule
  ],
  providers: [
    EmployeeService
  ],
  exports: [
    AgePipe
  ]
})
export class SharedModule { }
