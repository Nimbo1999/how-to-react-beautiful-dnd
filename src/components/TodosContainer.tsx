import { FC } from 'react';

import TodoList from './todos/TodoList';

const TodosContainer: FC = () => (
	<section className="todos-container">
		<TodoList
			title="A fazer"
			todos={[
				{
					title: 'Nova task',
					date: new Date(),
					description: 'descrição da task',
					onCancel: () => console.log('click'),
				},
				{
					title: 'Nova task2',
					date: new Date(),
					description: 'descrição da task2',
					onCancel: () => console.log('click2'),
				},
				{
					title: 'Nova task3',
					date: new Date(),
					description: 'descrição da task3',
					onCancel: () => console.log('click3'),
				},
			]}
			color="green"
		/>

		<TodoList
			title="Fazendo"
			todos={[
				{
					title: 'Fazendo Task',
					date: new Date(),
					description: 'Está sendo preparada',
					onCancel: () => console.log('fazendo'),
				},
			]}
			color="orange"
		/>

		<TodoList title="Feito" todos={[]} />

		<TodoList title="Cancelado" todos={[]} color="red" />
	</section>
);

export default TodosContainer;
