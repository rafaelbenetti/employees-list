import { EmployeeItemComponent } from './employee-item.component';

describe('EmployeeItemComponent (isolated)', () => {
  const component = new EmployeeItemComponent();

  it('should EMIT delete for an employee', () => {
    spyOn(component.delete, 'emit');
    component.onDelete();
    expect(component.delete.emit).toHaveBeenCalled();
  });

  it('should EMIT edit for an employee', () => {
    spyOn(component.edit, 'emit');
    component.onEdit();
    expect(component.edit.emit).toHaveBeenCalled();
  });
});
