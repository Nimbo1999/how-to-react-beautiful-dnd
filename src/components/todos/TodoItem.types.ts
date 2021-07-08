import { HTMLAttributes } from 'react';

export interface TodoItemModel {
	title?: string;
	date: Date;
	description: string;
	onCancel?: () => void;
}

export interface TodoItemProps extends HTMLAttributes<HTMLDivElement>, TodoItemModel {}
