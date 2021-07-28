import { FC, useState, useCallback } from 'react';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';

import initialState from '../mock/todosContainerInitialState';

import TodoList from './todos/TodoList';

const TodosContainer: FC = () => {
	const [todosSection, setTodosSection] = useState(initialState);

	const updateListA = useCallback(
		(source: DraggableLocation, destination: DraggableLocation | undefined) => {
			if (!destination) return;

			if (destination.droppableId === source.droppableId && destination.index === source.index) return;

			const section = todosSection[source.droppableId];

			const sourceItem = section.todos[source.index];

			const listWithoutSource = [
				...section.todos.slice(0, source.index),
				...section.todos.slice(source.index + 1, section.todos.length),
			];

			listWithoutSource.splice(destination.index, 0, sourceItem);

			const newTodosSection = {
				...todosSection,
				[source.droppableId]: {
					...section,
					todos: listWithoutSource,
				},
			};

			setTodosSection(newTodosSection);
		},
		[todosSection]
	);

	return (
		<section className="todos-container">
			<DragDropContext onDragEnd={e => updateListA(e.source, e.destination)}>
				{Object.keys(todosSection).map(key => (
					<TodoList key={key} {...todosSection[key]} />
				))}
			</DragDropContext>
		</section>
	);
};

export default TodosContainer;
