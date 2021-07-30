import { HTMLAttributes } from 'react';

export interface TodoItemModel {
	todoId: string;
	title?: string;
	date: string;
	description: string;
	index?: number;
}

export interface TodoItemProps extends HTMLAttributes<HTMLDivElement>, TodoItemModel {}
