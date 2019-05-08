import {Injectable} from '@nestjs/common';

export interface Todo {
  title: string;
}

@Injectable()
export class AppService {
  todos: Todo[] = [
    {
      title: 'Todo A'
    },
    {
      title: 'Todo B'
    }
  ];

  addTodo() {
    this.todos.push({
      title: `Random ${Math.floor(Math.random() * 100)}`
    });
  }
}
