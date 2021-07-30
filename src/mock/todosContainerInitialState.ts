import { TodoListProps } from '../components/todos/TodoList.types';

export type TodosSection = { [x: string]: TodoListProps };

const initialState: TodosSection = {
	todo: {
		id: 'todo',
		title: 'A fazer',
		todos: [
			{
				todoId: 'aa',
				title: 'Nova task',
				date: new Date().toISOString(),
				description: 'descrição da task',
			},
			{
				todoId: 'bb',
				title: 'Nova task2',
				date: new Date().toISOString(),
				description: 'descrição da task2',
			},
			{
				todoId: 'cc',
				title: 'Nova task3',
				date: new Date().toISOString(),
				description: 'descrição da task3',
			},
		],
		color: 'green',
	},
	doing: {
		id: 'doing',
		title: 'Fazendo',
		todos: [
			{
				todoId: 'dd',
				title: 'Fazendo Task',
				date: new Date().toISOString(),
				description: 'Está sendo preparada',
			},
			{
				todoId: 'ee',
				title: 'Fazendo Task1',
				date: new Date().toISOString(),
				description: 'Está sendo preparada1',
			},
		],
		color: 'orange',
	},
	done: {
		id: 'done',
		title: 'Feito',
		todos: [],
	},
	canceled: {
		id: 'canceled',
		title: 'Cancelado',
		todos: [],
		color: 'red',
	},
};

export default initialState;
