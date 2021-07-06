import { FC } from 'react';

const FooterComponent: FC = ({ children }) => (
	<footer className="app-footer-component">
		<span>{children}</span>
	</footer>
);

export default FooterComponent;
