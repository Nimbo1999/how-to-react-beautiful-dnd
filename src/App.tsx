import { FC, useRef, useEffect, useState } from 'react';
import packageJson from '../package.json';

import HeaderComponent from './components/HeaderComponent';
import SectionHeader from './components/SectionHeader';
import TodosContainer from './components/TodosContainer';
import FooterComponent from './components/FooterComponent';
import withClearCache from './components/WithClearCache';

import getBuildDate from './utils/getBuildDate';

const App: FC = () => {
	const mainRef = useRef<HTMLElement>(document.createElement('div'));

	const [headerOffsetTop, setHeaderOffsetTop] = useState<number>(0);

	useEffect(() => {
		if (mainRef.current) {
			const { current } = mainRef;
			const { firstElementChild } = current;

			if (firstElementChild) {
				setHeaderOffsetTop((firstElementChild as HTMLElement).clientHeight);
			}
		}
	}, [mainRef.current]);

	return (
		<>
			<HeaderComponent />

			<main className="main-container" ref={mainRef}>
				<SectionHeader />

				<TodosContainer headerOffsetTop={headerOffsetTop} />
			</main>

			<FooterComponent>
				Simple example of how to use react dnd, version date: {getBuildDate(Number(packageJson.buildDate))}
			</FooterComponent>
		</>
	);
};

export default withClearCache(App);
