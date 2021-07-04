import { FC } from 'react';

import HeaderComponent from './components/HeaderComponent';
import SectionHeader from './components/SectionHeader';

const App: FC = () => (
	<>
		<HeaderComponent />

		<div className="main-container">
			<SectionHeader />
		</div>
	</>
);

export default App;
