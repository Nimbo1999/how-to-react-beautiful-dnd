import { FC, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TodoItem from './TodoItem';

import { TodoListProps } from './TodoList.types';

const TodoList: FC<TodoListProps> = ({ id, title, todos, color = 'primary' }) => {
	const [classes] = useState(['todo-list-container', color]);

	return (
		<div className={classes.join(' ')}>
			<header>
				<span>{title}</span>
			</header>

			<Droppable droppableId={id}>
				{({ innerRef, droppableProps, placeholder }, { isDraggingOver }) => {
					const droppableClasses = ['todo-list-contents'];

					if (isDraggingOver) droppableClasses.push('dragging-over');

					return (
						<div className={droppableClasses.join(' ')} ref={innerRef} {...droppableProps}>
							{todos && todos.map((todo, index) => <TodoItem key={todo.todoId} {...todo} index={index} />)}
							{placeholder}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};

export default TodoList;
