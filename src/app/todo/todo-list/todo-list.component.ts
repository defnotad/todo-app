import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items = ["Scripting Lab work", "Operating System Lab work", "Software Engineering Lab work", "GeekforGeeks"];
}
