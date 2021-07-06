import { FC } from 'react';

import HeaderComponent from './components/HeaderComponent';
import SectionHeader from './components/SectionHeader';
import TodosContainer from './components/TodosContainer';

const App: FC = () => (
	<>
		<HeaderComponent />

		<div className="main-container">
			<SectionHeader />

			<TodosContainer />
		</div>
	</>
);

export default App;
