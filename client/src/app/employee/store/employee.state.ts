import { Employee } from '../employee.model';

export const employeeFeatureKey = 'employees';

export default class EmployeeState {
  employees!: Employee[];
}

export const initializeState = () => {
  return { employees: Array<Employee>() };
};
