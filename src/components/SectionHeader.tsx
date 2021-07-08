import { FC, useState } from 'react';

import Button from './Button';
import ModalComponent from './Modal';

const SectionHeader: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className="section-header-container">
			<div className="title-and-subtitle">
				<h3>Todo List</h3>

				<span>Cadastre novos itens para realizar e mova-os conforme desejar.</span>
			</div>

			<Button onClick={() => setIsOpen(true)}>Cadastrar tarefa</Button>

			<ModalComponent isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				<form className="add-task-modal-form">
					<div className="content-header">
						<h3>Cadastrar nova tarefa</h3>

						<hr />
					</div>

					<p>Quando você criar uma tarefa, ela vai aparecer dentro da seção &apos;A fazer&lsquo;.</p>

					<input type="text" placeholder="Título da tarefa" />

					<span className="textarea" role="textbox" contentEditable />

					<div className="modal-actions">
						<Button onClick={() => setIsOpen(false)}>Criar tarefa</Button>
					</div>
				</form>
			</ModalComponent>
		</section>
	);
};

export default SectionHeader;
