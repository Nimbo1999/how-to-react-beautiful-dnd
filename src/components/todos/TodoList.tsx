import { FC, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TodoItem from './TodoItem';

import { TodoListProps } from './TodoList.types';

const TodoList: FC<TodoListProps> = ({ title, todos, color = 'primary' }) => {
	const [classes] = useState(['todo-list-container', color]);

	return (
		<div className={classes.join(' ')}>
			<header>
				<span>{title}</span>
			</header>

			<Droppable droppableId={title}>
				{({ innerRef, droppableProps }) => (
					<div className="todo-list-contents" ref={innerRef} {...droppableProps}>
						{todos && todos.map((todo, index) => <TodoItem key={todo.todoId} {...todo} index={index} />)}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default TodoList;
