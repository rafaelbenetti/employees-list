import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from '../employee.model';

import * as EmployeeActions from './employee.actions';

@Injectable()
export class EmployeeEffects {
  constructor(
    private employeeService: EmployeeService,
    private action$: Actions) {}

  GetEmployees$: Observable < Action > = createEffect(() =>
    this.action$.pipe(
      ofType(EmployeeActions.BeginGetEmployeesAction),
      switchMap(() =>
        this.employeeService.get().pipe(
          map((data: Employee[]) => {
            return EmployeeActions.SuccessGetEmployeesAction({
              payload: data
            });
          }),
          catchError((error: Error) => {
            return of(EmployeeActions.ErrorEmployeeAction(error));
          })
        )
      )
    )
  );

  CreateEmployee$: Observable < Action > = createEffect(() =>
    this.action$.pipe(
      ofType(EmployeeActions.BeginCreateEmployeeAction),
      mergeMap((action: any) =>
        this.employeeService
        .create(action.payload)
        .pipe(
          map((data: Employee) => {
            return EmployeeActions.SuccessCreateEmployeeAction({
              payload: data
            });
          }),
          catchError((error: Error) => {
            return of(EmployeeActions.ErrorEmployeeAction(error));
          })
        )
      )
    )
  );

  UpdateEmployee$: Observable < Action > = createEffect(() =>
    this.action$.pipe(
      ofType(EmployeeActions.BeginUpdateEmployeeAction),
      mergeMap((action: any) =>
        this.employeeService
        .update(action.payload)
        .pipe(
          map(() => {
            return EmployeeActions.SuccessUpdateEmployeeAction({
              payload: action.payload
            });
          }),
          catchError((error: Error) => {
            return of(EmployeeActions.ErrorEmployeeAction(error));
          })
        )
      )
    )
  );

  DeleteEmployee$: Observable < Action > = createEffect(() =>
    this.action$.pipe(
      ofType(EmployeeActions.BeginDeleteEmployeeAction),
      mergeMap(action =>
        this.employeeService
        .delete(action.payload)
        .pipe(
          map(() => {
            return EmployeeActions.SuccessDeleteEmployeeAction({
              payload: action.payload
            });
          }),
          catchError((error: Error) => {
            return of(EmployeeActions.ErrorEmployeeAction(error));
          })
        )
      )
    )
  );
}
