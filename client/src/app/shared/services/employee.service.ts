import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Employee, WorkPositionType } from 'src/app/employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = `${environment.url}/employees`;

  constructor(private http: HttpClient) { }

  get(): Observable<Employee[]> {
    return of([{
      id: 1,
      name: 'Rafael',
      surname: 'Benetti',
      workPosition: WorkPositionType.FrontEndDeveloper,
      birthDate: new Date(1991, 7, 15)
    },{
      id: 1,
      name: 'Ruhan',
      surname: 'Pablo',
      workPosition: WorkPositionType.FrontEndDeveloper,
      birthDate: new Date(1991, 7, 15)
    }]);
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url, employee);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
