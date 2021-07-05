import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Employee, WorkPositionType } from '../employee.model';
import { EmployeeItemComponent } from './employee-item.component';

describe('EmployeeComponent (shallow)', () => {
  let component: EmployeeItemComponent;
  let fixture: ComponentFixture<EmployeeItemComponent>;

  const employee: Employee = {
    id: 1,
    name: 'Rafael',
    surname: 'Benetti',
    workPosition: WorkPositionType.FrontEndDeveloper,
    birthDate: new Date(1991, 7, 15)
  };

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeItemComponent ],
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
  });

  it('should EMIT delete for a employee', () => {
    spyOn(component.delete, 'emit');

    const el = fixture.nativeElement;
    const button = el.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.delete.emit).toHaveBeenCalled();
  });
});
