import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  employees$?: Observable<Employee[]>;
  employee?: Employee;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employees$ = this.employeeService.get();
  }

  onDeleteItem(employee: Employee) {
    this.employeeService.delete(employee.id)
      .subscribe();
  }
}
