import { FC, useState, useCallback } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { useAppDispatch } from '../../store';
import { cancelTodo } from '../../reducer/todo.reducer';

import TodoItem from './TodoItem';

import { TodoListProps } from './TodoList.types';
import { TodoItemModel } from './TodoItem.types';

const TodoList: FC<TodoListProps> = ({ id, title, todos, color = 'primary' }) => {
	const dispatch = useAppDispatch();

	const onCancelTodo = useCallback(
		(todo: TodoItemModel) => {
			dispatch(cancelTodo({ ...todo, sectionId: id }));
		},
		[dispatch]
	);

	const [classes] = useState(['todo-list-container', color]);

	return (
		<div className={classes.join(' ')}>
			<header>
				<span>{title}</span>
			</header>

			<Droppable droppableId={id} isDropDisabled={id === 'canceled'}>
				{({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => {
					const droppableClasses = ['todo-list-contents'];

					if (isDraggingOver) droppableClasses.push('dragging-over');

					return (
						<div className={droppableClasses.join(' ')} ref={innerRef} {...droppableProps}>
							{todos &&
								todos.map((todo, index) => (
									<TodoItem key={todo.todoId} {...todo} index={index} onCancel={onCancelTodo} />
								))}
							{placeholder}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};

export default TodoList;
