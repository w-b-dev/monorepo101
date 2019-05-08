import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Todo {
  title: string;
}

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos: Todo[];

  constructor(private httpClient: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.httpClient.get('/api/todos')
      .subscribe((r: any) => this.todos = r);
  }

  saveData() {
    this.httpClient.post('/api/add-todo', {})
      .subscribe(r => this.loadData());
  }
}
