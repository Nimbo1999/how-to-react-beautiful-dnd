import { TodoItemModel } from './TodoItem.types';

type TodoListColors = 'primary' | 'orange' | 'green' | 'red';

export interface TodoListProps {
	id: string;
	title: string;
	todos: Array<TodoItemModel>;
	color?: TodoListColors;
}
