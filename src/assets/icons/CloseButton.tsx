import { FC } from 'react';

import { IconProps } from './icon.props';

const CloseButton: FC<IconProps> = ({ width = 24, height = 24, color = '#D17171' }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.3333 1.375C5.97084 1.375 1.70834 5.6375 1.70834 11C1.70834 16.3625 5.97084 20.625 11.3333 20.625C16.6958 20.625 20.9583 16.3625 20.9583 11C20.9583 5.6375 16.6958 1.375 11.3333 1.375ZM15.0458 15.8125L11.3333 12.1L7.62084 15.8125L6.52084 14.7125L10.2333 11L6.52084 7.2875L7.62084 6.1875L11.3333 9.9L15.0458 6.1875L16.1458 7.2875L12.4333 11L16.1458 14.7125L15.0458 15.8125Z"
				fill={color}
			/>
		</svg>
	);
};

export default CloseButton;
