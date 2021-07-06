import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AgePipe } from 'src/app/shared/pipes/age.pipe';
import * as moment from 'moment';

import { Employee, WorkPositionType } from '../employee.model';
import { EmployeeItemComponent } from './employee-item.component';

describe('EmployeeItemComponent (shallow)', () => {
  let component: EmployeeItemComponent;
  let fixture: ComponentFixture<EmployeeItemComponent>;

  const employee: Employee = {
    id: '1',
    name: 'Rafael',
    surname: 'Benetti',
    workPosition: WorkPositionType.FrontEndDeveloper,
    birthDate: new Date(1991, 7, 15)
  };

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ 
        EmployeeItemComponent,
        AgePipe
      ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    done();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeItemComponent);
    component = fixture.componentInstance;
    component.employee = employee;
    fixture.detectChanges();
  });

  it('should show all employee properties', () => {
    const el = fixture.nativeElement;

    const name = el.querySelector('.name').innerHTML;
    expect(name).toContain(employee.name);
    expect(name).toContain(employee.surname);

    const age = el.querySelector('.age').innerHTML;
    const employeeAge = moment().diff(employee.birthDate, 'years');
    expect(age).toBe(`, ${employeeAge} Years`);

    const workPosition = el.querySelector('.work-position').innerHTML;
    expect(workPosition).toContain(employee.workPosition);
  });

  it('should EMIT delete for an employee', () => {
    spyOn(component.delete, 'emit');

    const el = fixture.nativeElement;
    const button = el.querySelector('button.button--secondary');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.delete.emit).toHaveBeenCalled();
  });

  it('should EMIT edit for an employee', () => {
    spyOn(component.edit, 'emit');

    const el = fixture.nativeElement;
    const button = el.querySelector('button:not(.button--secondary');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.edit.emit).toHaveBeenCalled();
  });
}); 
