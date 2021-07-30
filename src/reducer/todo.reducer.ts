import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItemModel } from '../components/todos/TodoItem.types';

import initialState, { TodosSection } from '../mock/todosContainerInitialState';

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		updateTodos: (_, action: PayloadAction<TodosSection>) => {
			return action.payload;
		},
		addTodo: (state: TodosSection, action: PayloadAction<TodoItemModel>) => {
			state.todo.todos.push(action.payload);
		},
	},
});

export const { updateTodos, addTodo } = todosSlice.actions;

export default todosSlice.reducer;
