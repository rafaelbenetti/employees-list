import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Employee } from 'src/app/employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = `${environment.url}/employees`;

  constructor(private http: HttpClient) { }

  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url, employee);
  }

  delete(id?: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
