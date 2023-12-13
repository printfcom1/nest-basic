import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];

  addTodo(title: string, subtitle: string) {
    const todo = new Todo();
    todo.id = uuidv4();
    todo.title = title;
    todo.subtitle = subtitle;
    this.todoArray.push(todo);
    return todo;
  }

  getTodo() {
    return this.todoArray;
  }

  deleteTodoById(id: string) {
    const found = this.todoArray.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`Todo with ${id} not found`);
    }
    this.todoArray = this.todoArray.filter((item) => item.id !== id);
    return this.todoArray;
  }
}
