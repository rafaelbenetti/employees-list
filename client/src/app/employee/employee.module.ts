import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeItemComponent,
    EmployeeEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EmployeeRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class EmployeeModule { }
