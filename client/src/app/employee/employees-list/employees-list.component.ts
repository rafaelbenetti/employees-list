import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit, AfterViewInit {
  search$: EventEmitter<string> = new EventEmitter<string>();

  employees$?: Observable<Employee[]>;
  employee?: Employee;
  
  formGroup: FormGroup = new FormGroup({
    search: new FormControl(null)
  });

  constructor(
    private router: Router,
    private employeeService: EmployeeService) {
  }

  ngOnInit() {    
    this.employees$ = this.search$.pipe(
      switchMap((search: string) => this.employeeService.get()
        .pipe(
          map((employees: Employee[]): Employee[] => {
            return employees
              .filter(employee => {
                const fullName = `${employee.name} ${employee.surname}`;
                
                return !search || 
                  (fullName.toLowerCase().includes(search) || 
                    employee.workPosition.toLowerCase().includes(search));
              });
          })
        )
      )
    );

    this.formGroup.valueChanges.subscribe((values) => {
      this.search$.emit(values.search?.toLowerCase());
    });
  }

  ngAfterViewInit(): void {
    this.search$.emit();
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
        this.employeeService.delete(employee.id)
          .subscribe(() => this.search$.emit());
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
