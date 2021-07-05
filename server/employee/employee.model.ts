import { model, Schema, Model, Document } from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  surname: string;
  workPosition: string;
  birthDate: Date;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  workPosition: { type: String, required: true },
  birthDate: { type: Date, default: Date.now }
});

export const EmployeeModel: Model<IEmployee> = model<IEmployee>('employees', EmployeeSchema);