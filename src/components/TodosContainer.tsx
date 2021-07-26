import { FC, useState, useCallback } from 'react';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';

import TodoList from './todos/TodoList';

const TodosContainer: FC = () => {
	const [listA, setListA] = useState([
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
	]);

	const updateListA = useCallback(
		(source: DraggableLocation, destination: DraggableLocation | undefined) => {
			if (destination) {
				const sourceItem = listA[source.index];

				const listWithoutSource = [...listA.slice(0, source.index), ...listA.slice(source.index + 1, listA.length)];

				listWithoutSource.splice(destination.index, 0, sourceItem);

				setListA(listWithoutSource);
			}
		},
		[listA]
	);

	return (
		<section className="todos-container">
			<DragDropContext onDragEnd={e => updateListA(e.source, e.destination)}>
				<TodoList title="A fazer" todos={listA} color="green" />

				<TodoList
					title="Fazendo"
					todos={[
						{
							todoId: 'dd',
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
			</DragDropContext>
		</section>
	);
};

export default TodosContainer;
