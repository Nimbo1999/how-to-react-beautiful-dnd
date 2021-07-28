import { FC, useState, useCallback } from 'react';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';

import initialState from '../mock/todosContainerInitialState';

import TodoList from './todos/TodoList';

const TodosContainer: FC<{ headerOffsetTop: number }> = ({ headerOffsetTop }) => {
	const [todosSection, setTodosSection] = useState(initialState);

	const updateListA = useCallback(
		(source: DraggableLocation, destination: DraggableLocation | undefined) => {
			if (!destination) return;

			if (destination.droppableId === source.droppableId && destination.index === source.index) return;

			const sectionStart = todosSection[source.droppableId];
			const sectionFinished = todosSection[destination.droppableId];

			// Moving from same list
			if (sectionStart.id === sectionFinished.id) {
				const sourceItem = sectionStart.todos[source.index];

				const listWithoutSource = [
					...sectionStart.todos.slice(0, source.index),
					...sectionStart.todos.slice(source.index + 1, sectionStart.todos.length),
				];

				listWithoutSource.splice(destination.index, 0, sourceItem);

				const newTodosSection = {
					...todosSection,
					[source.droppableId]: {
						...sectionStart,
						todos: listWithoutSource,
					},
				};

				setTodosSection(newTodosSection);
				return;
			}

			// Moving from different lists

			// Source list logic
			const sourceItem = sectionStart.todos[source.index];
			const startList = Array.from(sectionStart.todos);
			startList.splice(source.index, 1);
			const newStartColumn = {
				...sectionStart,
				todos: startList,
			};

			// Destination list logic
			const finishList = Array.from(sectionFinished.todos);
			finishList.splice(destination.index, 0, sourceItem);
			const newFinishColumn = {
				...sectionFinished,
				todos: finishList,
			};

			const newTodosSection = {
				...todosSection,
				[source.droppableId]: newStartColumn,
				[destination.droppableId]: newFinishColumn,
			};

			setTodosSection(newTodosSection);
		},
		[todosSection]
	);

	return (
		<section className="todos-container" style={{ marginTop: headerOffsetTop }}>
			<DragDropContext onDragEnd={e => updateListA(e.source, e.destination)}>
				{Object.keys(todosSection).map(key => (
					<TodoList key={key} {...todosSection[key]} />
				))}
			</DragDropContext>
		</section>
	);
};

export default TodosContainer;
