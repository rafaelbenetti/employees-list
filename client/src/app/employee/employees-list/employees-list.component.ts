import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';

import EmployeeState from '../store/employee.state';
import * as EmployeeActions from '../store/employee.actions';
import { selectEmployees } from '../store/employee.selectors';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  employees$?: Observable<Employee[]>;
  employee?: Employee;
  
  formGroup: FormGroup = new FormGroup({
    search: new FormControl(null)
  });

  constructor(
    private store: Store<EmployeeState>,
    private router: Router) { }

  ngOnInit() {  
    this.employees$ = combineLatest([
      this.search$,
      this.store.select(selectEmployees)
    ])
      .pipe(
        map(([search, employees]): Employee[] => {
          return employees
            .filter(employee => {
              const fullName = `${employee.name} ${employee.surname}`;
              
              return !search || 
                (fullName.toLowerCase().includes(search) || 
                  employee.workPosition.toLowerCase().includes(search));
            });
        })
    ); 

    this.formGroup.valueChanges
      .subscribe((values) => {
        this.search$.next(values.search?.toLowerCase());
      });
  }

  onDelete(employee: Employee) {   
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, End Contract!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(EmployeeActions.BeginDeleteEmployeeAction({payload: employee.id}));
      } 
    });
  }

  onHire() {
    this.router.navigate(['/employees/create']);
  }

  onEdit(employeeId?: string) {
    this.router.navigate(['/employees', employeeId]);
  }
}
