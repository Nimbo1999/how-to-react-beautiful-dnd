import { FC, useCallback } from 'react';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';

import { useAppSelector, useAppDispatch } from '../store';
import selectTodos from '../reducer/todos.selector';
import { updateTodos } from '../reducer/todo.reducer';

import TodoList from './todos/TodoList';
import { todosKeys } from '../mock/todosContainerInitialState';

const TodosContainer: FC<{ headerOffsetTop: number }> = ({ headerOffsetTop }) => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector(selectTodos);

	const updateListA = useCallback(
		(source: DraggableLocation, destination: DraggableLocation | undefined) => {
			if (!destination) return;

			if (destination.droppableId === source.droppableId && destination.index === source.index) return;

			const sectionStart = todos[source.droppableId as todosKeys];
			const sectionFinished = todos[destination.droppableId as todosKeys];

			// Moving from same list
			if (sectionStart.id === sectionFinished.id) {
				const sourceItem = sectionStart.todos[source.index];

				const listWithoutSource = [
					...sectionStart.todos.slice(0, source.index),
					...sectionStart.todos.slice(source.index + 1, sectionStart.todos.length),
				];

				listWithoutSource.splice(destination.index, 0, sourceItem);

				const newTodosSection = {
					...todos,
					[source.droppableId]: {
						...sectionStart,
						todos: listWithoutSource,
					},
				};

				dispatch(updateTodos(newTodosSection));
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
				...todos,
				[source.droppableId]: newStartColumn,
				[destination.droppableId]: newFinishColumn,
			};

			dispatch(updateTodos(newTodosSection));
		},
		[todos, dispatch]
	);

	return (
		<section className="todos-container" style={{ marginTop: headerOffsetTop }}>
			<DragDropContext onDragEnd={e => updateListA(e.source, e.destination)}>
				{Object.keys(todos).map(key => (
					<TodoList key={key} {...todos[key as todosKeys]} />
				))}
			</DragDropContext>
		</section>
	);
};

export default TodosContainer;
