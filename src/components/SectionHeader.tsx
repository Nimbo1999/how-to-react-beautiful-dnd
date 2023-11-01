import { FC, useState, useCallback, FormEvent, useRef } from 'react';

import { useAppDispatch } from '../store';
import { addTodo } from '../reducer/todo.reducer';

import Button from './Button';
import ModalComponent from './Modal';
import makeid from '../utils/string.utils';

const SectionHeader: FC = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleOnSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			if (title && description) {
				dispatch(
					addTodo({
						title,
						description,
						date: new Date().toISOString(),
						todoId: makeid(3),
					})
				);

				setTitle('');
				setDescription('');
				setIsOpen(false);
			}
		},
		[title, description, dispatch]
	);

	return (
		<section className="section-header-container">
			<div className="title-and-subtitle">
				<h3>Todo List</h3>

				<span>Register new items to perform and move them as you wish.</span>
			</div>

			<Button onClick={() => setIsOpen(true)}>Register todo</Button>

			<ModalComponent isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				<form className="add-task-modal-form" onSubmit={handleOnSubmit}>
					<div className="content-header">
						<h3>Register new todo</h3>

						<hr />
					</div>

					<p>When you create a task, it will appear within the &apos;To Do&lsquo; section.</p>

					<input type="text" placeholder="Todo title" value={title} onChange={e => setTitle(e.target.value)} />

					<span
						className="textarea"
						role="textbox"
						contentEditable
						aria-label="Todo description"
						onInput={e => {
							const { textContent } = e.target as HTMLSpanElement;

							if (textContent) setDescription(textContent);
						}}
						onKeyPress={e => {
							if (e.ctrlKey && e.code === 'Enter') {
								buttonRef.current?.click();
							}
						}}
						tabIndex={0}
					/>

					<div className="modal-actions">
						<Button type="submit" ref={buttonRef}>
							Create todo
						</Button>
					</div>
				</form>
			</ModalComponent>
		</section>
	);
};

export default SectionHeader;
