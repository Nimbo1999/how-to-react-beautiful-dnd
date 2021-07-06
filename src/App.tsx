import { FC } from 'react';

import HeaderComponent from './components/HeaderComponent';
import SectionHeader from './components/SectionHeader';
import TodosContainer from './components/TodosContainer';
import FooterComponent from './components/FooterComponent';

const App: FC = () => (
	<>
		<HeaderComponent />

		<div className="main-container">
			<SectionHeader />

			<TodosContainer />

			<FooterComponent>Simple example of how to use react dnd</FooterComponent>
		</div>
	</>
);

export default App;
