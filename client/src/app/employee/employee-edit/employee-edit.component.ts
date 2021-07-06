import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from '../employee.model';

const CREATE_ROUTE = 'create';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    surname: new FormControl(null, Validators.required),
    workPosition: new FormControl(null, Validators.required),
    birthDate: new FormControl(null, Validators.required)
  });

  isEdit?: boolean;
  employeeId?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeId = `${this.route.snapshot.paramMap.get('id')}`;
    this.isEdit = this.employeeId !== CREATE_ROUTE;

    if (this.isEdit) {
      this.employeeService.get().subscribe(employees => {
        const employee = employees.find(e => e.id === this.employeeId);
        if (employee) {
          this.formGroup.patchValue(employee);
        }
      });
    }
  }

  onCreate(): void {
    const employee: Employee = this.formGroup.getRawValue();

    this.employeeService.create(employee)
      .subscribe(() => this.redirectToEmployees());
  }

  onUpdate(): void {
    const employee: Employee = this.formGroup.getRawValue();

    this.employeeService.update(employee)
      .subscribe(() => this.redirectToEmployees());
  }  

  redirectToEmployees(): void {
    this.router.navigate(['/employees']);
  }
}
