import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  @Output() delete: EventEmitter<void> = new EventEmitter();

  @Input() employee!: Employee;

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }
}
