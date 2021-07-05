import { connect } from '../config/db.config';
import { EmployeeModel, IEmployee } from './employee.model';

export class EmployeekService {

  constructor() {
    connect();
  }

  async get() {
    return await EmployeeModel.find({});
  }

  async create(employee: IEmployee) {
    return await EmployeeModel.create(employee);
  }

  async update(employee: IEmployee) {
    return await EmployeeModel.updateOne({_id: employee.id}, employee);
  }

  async delete(employeeId: string) {
    return await EmployeeModel.deleteOne({_id: employeeId});
  }
}
