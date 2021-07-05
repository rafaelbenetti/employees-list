import { EmployeekService } from './employee-service';
import { IEmployee } from './employee.model';

export class EmployeeController {

  private employeeService!: EmployeekService;

  constructor() {
    this.employeeService = new EmployeekService();
  }

  async get() {
    return await this.employeeService.get();
  }

  async create(employee: IEmployee) {
    return await this.employeeService.create(employee);
  }

  async update(employee: IEmployee) {
    return await this.employeeService.update(employee);
  }

  async delete(employeeId: string) {
    return await this.employeeService.delete(employeeId);
  }
}
