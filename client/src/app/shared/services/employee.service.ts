import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Employee, WorkPositionType } from 'src/app/employee/employee.model';
import { map } from 'rxjs/operators';

interface WorkPostionsRequest {
  positions: WorkPositionType[];
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = `${environment.url}/employees`;
  workPositionsUrl = `${environment.workPositionsUrl}`;

  constructor(private http: HttpClient) { }

  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  getWorkPositions(): Observable<WorkPositionType[]> {
    return this.http.get<WorkPostionsRequest>(this.workPositionsUrl)
      .pipe(
        map((request: WorkPostionsRequest) => request.positions)
      );
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url, employee);
  }

  delete(id?: string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.url}/${id}`);
  }
}
