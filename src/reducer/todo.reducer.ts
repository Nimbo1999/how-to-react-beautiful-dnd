import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import dayjs from 'dayjs';

import { TodoItemModel } from '../components/todos/TodoItem.types';

import { TodoListProps } from '../components/todos/TodoList.types';

export type todosKeys = 'todo' | 'doing' | 'done' | 'canceled';

export interface TodosReducer {
	todo: TodoListProps;
	doing: TodoListProps;
	done: TodoListProps;
	canceled: TodoListProps;
}

const initialState: TodosReducer = {
	todo: {
		id: 'todo',
		title: 'A fazer',
		todos: [],
		color: 'green',
	},
	doing: {
		id: 'doing',
		title: 'Fazendo',
		todos: [],
		color: 'orange',
	},
	done: {
		id: 'done',
		title: 'Feito',
		todos: [],
	},
	canceled: {
		id: 'canceled',
		title: 'Cancelado',
		todos: [],
		color: 'red',
	},
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		updateTodos: (_, action: PayloadAction<TodosReducer>) => {
			return action.payload;
		},
		addTodo: (state: TodosReducer, action: PayloadAction<TodoItemModel>) => {
			state.todo.todos.push(action.payload);
		},
		cancelTodo: (state: TodosReducer, action: PayloadAction<TodoItemModel & { sectionId: string }>) => {
			const { payload } = action;
			const { sectionId } = payload;
			const indexOfTodo = state[sectionId as todosKeys].todos.findIndex(element => element.todoId === payload.todoId);

			const removedItem = state[sectionId as todosKeys].todos[indexOfTodo];
			removedItem.expiresAt = dayjs().add(1, 'hour').toISOString();

			state[sectionId as todosKeys].todos.splice(indexOfTodo, 1);

			state.canceled.todos.push(removedItem);
		},
		deleteCanceledTodo: (state: TodosReducer, action: PayloadAction<TodoItemModel>) => {
			const { payload } = action;

			const indexOfTodo = state.canceled.todos.findIndex(element => element.todoId === payload.todoId);
			state.canceled.todos.splice(indexOfTodo, 1);
		},
		restoreCanceledTodo: (state: TodosReducer, action: PayloadAction<TodoItemModel>) => {
			const { payload } = action;

			const indexOfTodo = state.canceled.todos.findIndex(element => element.todoId === payload.todoId);

			const targetTodo = state.canceled.todos[indexOfTodo];
			targetTodo.expiresAt = undefined;

			state.canceled.todos.splice(indexOfTodo, 1);

			state.todo.todos.push(targetTodo);
		},
	},
});

export const { updateTodos, addTodo, cancelTodo, deleteCanceledTodo, restoreCanceledTodo } = todosSlice.actions;

const persistConfig: PersistConfig<TodosReducer> = {
	key: 'todos',
	storage,
	debug: process.env.NODE_ENV === 'development',
	serialize: true,
	stateReconciler: autoMergeLevel1,
};

export default persistReducer(persistConfig, todosSlice.reducer);
