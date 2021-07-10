import request from 'supertest';
import app from '../config/express';
import { IEmployee } from '../employee/employee.model';
import EMPLOYEES from './mock/employees';

const COLLECTION = '/employees';
const EMPLOYEE = EMPLOYEES[0];

describe('Creating new Employee', () => {
  it('should returns 201 status', async () => {
    await request(app)
      .post(COLLECTION)
      .send(EMPLOYEE)
      .expect(201);
  });
});

describe('Delete Employee', () => {
  it('should delete Employee by ID', async () => {
    await findOne().then((employee: IEmployee) => {
      request(app)
        .delete(`${COLLECTION}/${employee.id}`)
        .expect(204);
    });
  });
});

describe('Find Employees', () => {
  it('should return status 200', async () => {
    await request(app)
      .get(COLLECTION)
      .expect(200);
  });
});

let findOne = (id?: string) => {
  return request(app)
    .get(COLLECTION)
    .then(result => {
      return result.body.find(employee => !id || employee.id === id);
    });
};
