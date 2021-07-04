import { FC, ButtonHTMLAttributes } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	className,
	type = 'button',
	...buttonProps
}) => {
	return (
		<button className={['button-container', className].join(' ')} type={type} {...buttonProps}>
			{children}
		</button>
	);
};

export default Button;
