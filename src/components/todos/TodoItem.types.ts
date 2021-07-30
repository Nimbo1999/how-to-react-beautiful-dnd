/* eslint-disable no-unused-vars */
import { HTMLAttributes } from 'react';

export interface TodoItemModel {
	todoId: string;
	title?: string;
	date: string;
	description: string;
	index?: number;
	onCancel?: (todo: TodoItemModel) => void;
}

export interface TodoItemProps extends HTMLAttributes<HTMLDivElement>, TodoItemModel {}
