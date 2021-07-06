type TodoListColors = 'primary' | 'orange' | 'green' | 'red';

export interface TodoListProps {
	title: string;
	todos?: Array<string>;
	color?: TodoListColors;
}
