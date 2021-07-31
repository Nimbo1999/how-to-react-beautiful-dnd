import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import store, { persistor } from './store';

import App from './App';

import './assets/less/main.less';

dayjs.extend(duration);

ReactDom.render(
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={<>Loading...</>}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
