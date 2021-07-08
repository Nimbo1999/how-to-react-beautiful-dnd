import { FC } from 'react';

import Button from '../Button';

import { TodoItemProps } from './TodoItem.types';

const TodoItem: FC<TodoItemProps> = ({ title, date, description, onCancel, className, ...divProps }) => {
	const classes = ['todo-item-container'];

	if (className) classes.push(className);

	return (
		<div className={classes.join(' ')} {...divProps}>
			<header>
				<h4>{title}</h4>

				<span>{date.toLocaleDateString()}</span>
			</header>

			<p className="description">{description}</p>

			<footer>
				<Button className="red">Cancelar</Button>
			</footer>
		</div>
	);
};

export default TodoItem;
