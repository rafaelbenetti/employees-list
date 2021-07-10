import { createAction, props } from '@ngrx/store';
import { Employee } from '../employee.model';

export const BeginGetEmployeesAction = createAction('[Employee] - Begin Get Employee');

export const SuccessGetEmployeesAction = createAction(
  '[Employee API] - Success Get Employees',
  props<{ payload: Employee[] }>()
);

export const BeginCreateEmployeeAction = createAction(
  '[Employee API] - Begin Create Employee',
  props<{ payload: Employee }>()
);

export const SuccessCreateEmployeeAction = createAction(
  '[Employee API] - Success Create Employee',
  props<{ payload: Employee }>()
);

export const BeginUpdateEmployeeAction = createAction(
  '[Employee API] - Begin Update Employee',
  props<{ payload: Employee }>()
);

export const SuccessUpdateEmployeeAction = createAction(
  '[Employee API] - Success Update Employee',
  props<{ payload: Employee }>()
);

export const BeginDeleteEmployeeAction = createAction(
  '[Employee API] - Begin Delete Employee',
  props<{ payload?: string }>()
);

export const SuccessDeleteEmployeeAction = createAction(
  '[Employee API] - Success Delete Employee',
  props<{ payload?: string }>()
);

export const ErrorEmployeeAction = createAction('[Employee API] - Error', props<Error>());
