import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState, { TodosSection } from '../mock/todosContainerInitialState';

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		updateTodos: (_, action: PayloadAction<TodosSection>) => {
			return action.payload;
		},
	},
});

export const { updateTodos } = todosSlice.actions;

export default todosSlice.reducer;
