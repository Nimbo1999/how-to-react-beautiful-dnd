import { FC } from 'react';

const HeaderComponent: FC = () => {
	return (
		<header className="header-container">
			<h3>React Beautiful DND Sample</h3>

			<div className="image-wraper">
				<img src="https://avatars.githubusercontent.com/u/42950729?s=60&v=4" alt="Matheus Lopes" />
			</div>
		</header>
	);
};

export default HeaderComponent;
