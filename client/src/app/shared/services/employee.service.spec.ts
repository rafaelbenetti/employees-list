import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';
import { environment } from 'src/environments/environment';
import { Employee, WorkPositionType } from 'src/app/employee/employee.model';

describe('EmployeeService (isolated)', () => {
  let httpTestingController: HttpTestingController;
  let service: EmployeeService;

  const url = `${environment.url}/employees`;
  const workPositionsUrl = `${environment.workPositionsUrl}`;

  const employee: Employee = {
    id: '1',
    name: 'Rafael',
    surname: 'Benetti',
    workPosition: WorkPositionType.FrontEndDeveloper,
    birthDate: new Date(1991, 7, 15)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EmployeeService);
  });

  it('should call employees resource with GET method', () => {
    service.get().subscribe();

    const request = httpTestingController.expectOne(url);
    request.flush([]);

    expect(request.request.method).toBe('GET');
    httpTestingController.verify();
  });

  it('should call Work Positions resource with GET method', () => {
    service.getWorkPositions().subscribe();

    const request = httpTestingController.expectOne(workPositionsUrl);
    request.flush([]);

    expect(request.request.method).toBe('GET');
    httpTestingController.verify();
  });

  it('should call employees resource with POST method', () => {
    service.create(employee).subscribe();

    const request = httpTestingController.expectOne(url);
    request.flush([]);

    expect(request.request.method).toBe('POST');
    httpTestingController.verify();
  });

  it('should call employees resource with PUT method', () => {
    service.update(employee).subscribe();

    const request = httpTestingController.expectOne(url);
    request.flush([]);

    expect(request.request.method).toBe('PUT');
    httpTestingController.verify();
  });

  it('should call employees resource with DELETE method', () => {
    service.delete(employee.id).subscribe();

    const request = httpTestingController.expectOne(`${url}/${employee.id}`);
    request.flush([]);

    expect(request.request.method).toBe('DELETE');
    httpTestingController.verify();
  });
});
