import { FC, useState } from 'react';
import { TodoListProps } from './TodoList.types';

const TodoList: FC<TodoListProps> = ({ title, todos, color = 'primary' }) => {
	const [classes] = useState(['todo-list-container', color]);

	return (
		<div className={classes.join(' ')}>
			<header>
				<span>{title}</span>
			</header>

			<div className="todo-list-contents">{todos && todos.map(todo => <span>{todo}</span>)}</div>
		</div>
	);
};

export default TodoList;
