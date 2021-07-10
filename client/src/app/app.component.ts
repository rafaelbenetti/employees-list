import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as EmployeeActions from './employee/store/employee.actions';
import EmployeeState from './employee/store/employee.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  constructor(private store: Store<EmployeeState>) {}

  ngOnInit() {
    this.store.dispatch(EmployeeActions.BeginGetEmployeesAction());
  }
}
