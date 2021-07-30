import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Button from '../Button';

import { TodoItemProps } from './TodoItem.types';

const TodoItem: FC<TodoItemProps> = ({
	todoId,
	title,
	date,
	description,
	className,
	index = 0,
	onCancel,
	...divProps
}) => {
	return (
		<Draggable draggableId={todoId} index={index}>
			{({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => {
				const classes = ['todo-item-container'];

				if (className) classes.push(className);
				if (isDragging) classes.push('dragging');

				return (
					<div ref={innerRef} className={classes.join(' ')} {...divProps} {...draggableProps} {...dragHandleProps}>
						<header>
							<h4>{title}</h4>

							<span>{new Date(date).toLocaleDateString()}</span>
						</header>

						<p className="description">{description}</p>

						<footer>
							<Button
								className="red"
								onClick={() => {
									if (onCancel) onCancel({ todoId, title, date, description, index });
								}}
							>
								Cancelar
							</Button>
						</footer>
					</div>
				);
			}}
		</Draggable>
	);
};

export default TodoItem;
