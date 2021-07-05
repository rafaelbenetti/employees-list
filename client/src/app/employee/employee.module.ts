import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeItemComponent } from './employee-item/employee-item.component';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeItemComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
