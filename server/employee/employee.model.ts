import { model, Schema, Model, Document } from 'mongoose';

export interface IEmployee extends Document {
  id: string;
  name: string;
  surname: string;
  workPosition: string;
  birthDate: Date;
}

const employeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  workPosition: { type: String, required: true },
  birthDate: { type: Date, default: Date.now }
});

employeeSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
}); 

export const EmployeeModel: Model<IEmployee> = model<IEmployee>('employees', employeeSchema);