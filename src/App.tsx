import { FC, useEffect, useState } from 'react';

const App: FC = () => {
	const [nome] = useState();

	useEffect(() => {
		console.log(nome);
	}, []);

	return <div className="Olá">Hello</div>;
};

export default App;
