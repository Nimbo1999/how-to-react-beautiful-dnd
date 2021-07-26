import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Button from '../Button';

import { TodoItemProps } from './TodoItem.types';

const TodoItem: FC<TodoItemProps> = ({
	todoId,
	title,
	date,
	description,
	onCancel,
	className,
	index = 0,
	...divProps
}) => {
	const classes = ['todo-item-container'];

	if (className) classes.push(className);

	return (
		<Draggable draggableId={todoId} index={index}>
			{({ innerRef, draggableProps, dragHandleProps }) => (
				<div ref={innerRef} className={classes.join(' ')} {...divProps} {...draggableProps} {...dragHandleProps}>
					<header>
						<h4>{title}</h4>

						<span>{date.toLocaleDateString()}</span>
					</header>

					<p className="description">{description}</p>

					<footer>
						<Button className="red" onClick={onCancel}>
							Cancelar
						</Button>
					</footer>
				</div>
			)}
		</Draggable>
	);
};

export default TodoItem;
