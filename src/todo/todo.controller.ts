import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getToDos() {
    return this.todoService.getTodo();
  }

  @Post()
  postToDos(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    return this.todoService.addTodo(title, subtitle);
  }

  @Delete('/:id')
  deleteToDoById(@Param('id') id: string) {
    return this.todoService.deleteTodoById(id);
  }
}
