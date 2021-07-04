import { FC } from 'react';

import Button from './Button';

const SectionHeader: FC = () => (
	<section className="section-header-container">
		<div className="title-and-subtitle">
			<h3>Todo List</h3>

			<span>Cadastre novos itens para realizar e mova-os conforme desejar.</span>
		</div>

		<Button>Cadastrar tarefa</Button>
	</section>
);

export default SectionHeader;
