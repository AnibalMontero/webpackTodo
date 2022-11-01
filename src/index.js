import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
import './styles.css';

todoList.todos.forEach(crearTodoHtml);

// todoList.nuevoTodo(tarea);

// crearTodoHtml(tarea);
