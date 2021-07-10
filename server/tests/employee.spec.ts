import request from 'supertest';
import app from '../config/express';
import { IEmployee } from '../employee/employee.model';
import EMPLOYEES from './mock/employees';

const COLLECTION = '/employees';
const EMPLOYEE = EMPLOYEES[0];

describe('Creating new Employee', () => {
  it('should create employee and return correct http status', async () => {
    await request(app)
      .post(COLLECTION)
      .send(EMPLOYEE)
      .expect(201)
      .then(() => {
        request(app)
          .get(COLLECTION)
          .then(result => {
            return expect(result.body?.length).toBeTruthy();
          });
      });
  });
});

describe('Update Employee', () => {
  it('should update employee by ID', async () => {
    await findOne().then((employee: IEmployee) => {
      employee.name = `${employee.name} updated`;
      request(app)
        .put(COLLECTION)
        .send(employee)
        .expect(200)
        .then(() => {
          request(app)
          .get(COLLECTION)
          .then(result => {
            const updated = result.body.find(e => e.id === employee.id);
            return expect(updated.name).toBe(employee.name);
          });
        });
    });
  });

  it('should return 404 when ID not passed', async () => {    
    await request(app)
      .put(COLLECTION)
      .send()
      .expect(404);
  });
});

describe('Delete Employee', () => {
  it('should delete employee by ID', async () => {
    await findOne().then((employee: IEmployee) => {
      request(app)
        .delete(`${COLLECTION}/${employee.id}`)
        .expect(204);
    });
  });

  it('should return 404 when ID not passed', async () => {    
    await request(app)
      .delete(COLLECTION)
      .expect(404);
  });
});

describe('Find Employees', () => {
  it('should return all employees', async () => {
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
