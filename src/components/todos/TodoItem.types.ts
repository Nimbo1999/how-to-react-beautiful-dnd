import { HTMLAttributes } from 'react';

export interface TodoItemModel {
	todoId: string;
	title?: string;
	date: Date;
	description: string;
	onCancel?: () => void;
	index?: number;
}

export interface TodoItemProps extends HTMLAttributes<HTMLDivElement>, TodoItemModel {}
