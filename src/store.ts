import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import todoReducer from './reducer/todo.reducer';

const store = configureStore({
	devTools: false,
	reducer: todoReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistor = persistStore(store);

export { store as default, persistor, RootState, AppDispatch, useAppDispatch, useAppSelector };
