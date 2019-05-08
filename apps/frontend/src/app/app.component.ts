import { Component } from '@angular/core';

export interface Todo {
  title: string;
}

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [
    {
      title: 'todo 1'
    },
    {
      title: 'todo 2'
    }
  ];

  addTodo() {
    this.todos.push({
      title: `Random ${Math.floor(Math.random() * 100)}`
    });
  }
}
