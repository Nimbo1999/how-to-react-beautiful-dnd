import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import dayjs from 'dayjs';

import { deleteTodo } from '../../reducer/todo.reducer';

import Button from '../Button';

import { TodoItemProps } from './TodoItem.types';

import CloseButton from '../../assets/icons/CloseButton';

const TodoItem: FC<TodoItemProps> = ({
	todoId,
	title,
	date,
	description,
	className,
	index = 0,
	onCancel,
	onRestore,
	expiresAt,
	...divProps
}) => {
	const dispatch = useDispatch();
	const [countdown, setCountdown] = useState<number>();

	useEffect(() => {
		if (expiresAt) {
			const milliseconds = dayjs(expiresAt).unix() * 1000 - dayjs().unix() * 1000;

			setCountdown(milliseconds);
		}
	}, [expiresAt]);

	useEffect(() => {
		const timer = !!countdown && countdown > 0 && setInterval(() => setCountdown(countdown - 1000), 1000);

		if (countdown === 0) {
			dispatch(deleteTodo({ todoId, title, date, expiresAt, description }));
		}

		return () => {
			if (timer) clearInterval(timer);
		};
	}, [countdown, dispatch]);

	return (
		<Draggable draggableId={todoId} index={index} isDragDisabled={!!expiresAt}>
			{({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => {
				const classes = ['todo-item-container'];

				if (className) classes.push(className);
				if (isDragging) classes.push('dragging');

				return (
					<div ref={innerRef} className={classes.join(' ')} {...divProps} {...draggableProps} {...dragHandleProps}>
						{!expiresAt && (
							<div className="close-todo-wrapper">
								<Button
									type="button"
									className="raw"
									onClick={() => {
										if (onCancel) onCancel({ todoId, title, date, description });
									}}
								>
									<CloseButton />
								</Button>
							</div>
						)}

						<header>
							<h4>{title}</h4>

							<span>{new Date(date).toLocaleDateString()}</span>
						</header>

						<p className="description">{description}</p>

						{expiresAt && (
							<footer>
								<Button
									onClick={() => {
										if (onRestore) onRestore({ todoId, title, date, description });
									}}
								>
									Restaurar{' — '}
									{!!countdown && dayjs.duration(countdown).format(countdown === 3600000 ? 'H:mm:ss' : 'mm:ss')}
								</Button>
							</footer>
						)}
					</div>
				);
			}}
		</Draggable>
	);
};

export default TodoItem;
