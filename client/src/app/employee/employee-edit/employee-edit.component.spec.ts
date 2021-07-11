  
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { EmployeeEditComponent } from './employee-edit.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectEmployees } from '../store/employee.selectors';
import { Employee, WorkPositionType } from '../employee.model';
import * as EmployeeActions from '../store/employee.actions';

describe('EmployeeEditComponent (shallow)', () => {
  let component: EmployeeEditComponent;
  let fixture: ComponentFixture<EmployeeEditComponent>;  
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditComponent ],
      imports: [ 
        RouterTestingModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      providers: [
        EmployeeService,
        provideMockStore({
          initialState: { employees: { employees: [] } },
          selectors: [{ 
            selector: selectEmployees, 
            value: [{
              id: '1',
              name: 'Rafael',
              surname: 'Benetti',
              workPosition: WorkPositionType.FrontEndDeveloper,
              birthDate: new Date(1991, 7, 15)
            }] 
          }],
        }),
      ]
    })
    .compileComponents();    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should render all input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[formControlName="name"]');
    const surnameInput = compiled.querySelector('input[formControlName="surname"]');
    const workPositionSelect = compiled.querySelector('mat-select[formControlName="workPosition"]');
    const bithDateInput = compiled.querySelector('input[formControlName="birthDate"]');

    expect(nameInput).toBeTruthy();
    expect(surnameInput).toBeTruthy();
    expect(workPositionSelect).toBeTruthy();
    expect(bithDateInput).toBeTruthy();
  });

  it('should require fields to be filled', () => {
    const formGroup = component.formGroup;
    expect(formGroup.valid).toBeFalsy();

    const nameInput = formGroup.controls.name;
    nameInput.setValue('John');
    expect(formGroup.valid).toBeFalsy();

    const surnameInput = formGroup.controls.surname;
    surnameInput.setValue('Peter');
    expect(formGroup.valid).toBeFalsy();

    const workPositionInput = formGroup.controls.workPosition;
    workPositionInput.setValue(WorkPositionType.FrontEndDeveloper);
    expect(formGroup.valid).toBeFalsy();

    const birthDateInput = formGroup.controls.birthDate;
    birthDateInput.setValue(new Date());

    expect(formGroup.valid).toBeTruthy();
  });

  it('should show correct titles for HIRE case', () => {
    component.isEdit = false;
    fixture.detectChanges();

    const hireTitle = 'Hire Employee';

    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('.title');
    expect(title.textContent).toContain(hireTitle);

    const saveButton = compiled.querySelector('.button');
    expect(saveButton.textContent).toContain(hireTitle);
  });

  it('should show correct titles for UPDATE case', () => {
    component.isEdit = true;
    fixture.detectChanges();
    
    const hireTitle = 'Update Employee';

    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('.title');
    expect(title.textContent).toContain(hireTitle);

    const saveButton = compiled.querySelector('.button');
    expect(saveButton.textContent).toContain(hireTitle);
  }); 
});