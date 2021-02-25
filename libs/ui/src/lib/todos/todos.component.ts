import { Component, Input } from '@angular/core';
import { Todo } from '@nxworkspace/data';

@Component({
  selector: 'nxworkspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @Input() todos: Todo[];
}