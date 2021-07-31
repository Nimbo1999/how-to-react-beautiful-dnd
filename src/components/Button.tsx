/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
	({ children, className, type = 'button', ...buttonProps }, ref) => {
		return (
			<button ref={ref} className={['button-container', className].join(' ')} type={type} {...buttonProps}>
				{children}
			</button>
		);
	}
);

export default Button;
