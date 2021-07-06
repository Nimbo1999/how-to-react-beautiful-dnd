import { FC } from 'react';

import TodoList from './todos/TodoList';

const TodosContainer: FC = () => (
	<section className="todos-container">
		<TodoList title="A fazer" todos={['testando', 'testando1']} color="green" />

		<TodoList title="Fazendo" todos={['testando novamente', 'testando novamente1']} color="orange" />

		<TodoList title="Feito" todos={['testando novamente', 'testando novamente1']} />

		<TodoList title="Cancelado" todos={['testando novamente', 'testando novamente1']} color="red" />
	</section>
);

export default TodosContainer;
