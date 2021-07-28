import { TodoListProps } from '../components/todos/TodoList.types';

type TodosSection = { [x: string]: TodoListProps };

const initialState: TodosSection = {
	todo: {
		id: 'todo',
		title: 'A fazer',
		todos: [
			{
				todoId: 'aa',
				title: 'Nova task',
				date: new Date(),
				description: 'descrição da task',
				onCancel: () => console.log('click'),
			},
			{
				todoId: 'bb',
				title: 'Nova task2',
				date: new Date(),
				description: 'descrição da task2',
				onCancel: () => console.log('click2'),
			},
			{
				todoId: 'cc',
				title: 'Nova task3',
				date: new Date(),
				description: 'descrição da task3',
				onCancel: () => console.log('click3'),
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
				date: new Date(),
				description: 'Está sendo preparada',
				onCancel: () => console.log('fazendo'),
			},
			{
				todoId: 'ee',
				title: 'Fazendo Task1',
				date: new Date(),
				description: 'Está sendo preparada1',
				onCancel: () => console.log('fazendo1'),
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
