
import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employee.actions';
import EmployeeState, { initializeState } from './employee.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(EmployeeActions.SuccessGetEmployeesAction, (state: EmployeeState, { payload }) => {
    return { ...state, employees: payload };
  }),
  on(EmployeeActions.SuccessCreateEmployeeAction, (state: EmployeeState, { payload }) => {
    return { ...state, employees: [...state.employees, payload], EmployeeError: null };
  }),
  on(EmployeeActions.SuccessUpdateEmployeeAction, (state: EmployeeState, { payload }) => {
    return { ...state, employees: [...state.employees.filter(t => t.id !== payload.id), payload], EmployeeError: null };
  }),
  on(EmployeeActions.SuccessDeleteEmployeeAction, (state: EmployeeState, { payload }) => {
    return { ...state, employees: state.employees.filter(t => t.id !== payload), EmployeeError: null };
  }),
  on(EmployeeActions.ErrorEmployeeAction, (state: EmployeeState, error: Error) => {
    return { ...state, EmployeeError: error };
  })
);

export function EmployeeReducer(state: EmployeeState | undefined, action: Action) {
  return reducer(state, action);
}
