import {createFeatureSelector, createSelector} from '@ngrx/store';
import EmployeeState from './employee.state';

const selectEmployeeFeature = createFeatureSelector<EmployeeState>('employees');

export const selectEmployees = createSelector(selectEmployeeFeature, state => state.employees);