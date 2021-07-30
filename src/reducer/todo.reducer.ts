import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItemModel } from '../components/todos/TodoItem.types';

import initialState, { TodosSection, todosKeys } from '../mock/todosContainerInitialState';

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
		cancelTodo: (state: TodosSection, action: PayloadAction<TodoItemModel & { sectionId: string }>) => {
			const { payload } = action;
			const { sectionId } = payload;
			const indexOfTodo = state[sectionId as todosKeys].todos.findIndex(element => element.todoId === payload.todoId);

			const removedItem = state[sectionId as todosKeys].todos[indexOfTodo];

			state[sectionId as todosKeys].todos.splice(indexOfTodo, 1);

			state.canceled.todos.push(removedItem);
		},
	},
});

export const { updateTodos, addTodo, cancelTodo } = todosSlice.actions;

export default todosSlice.reducer;
