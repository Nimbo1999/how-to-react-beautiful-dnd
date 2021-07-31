import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import store from './store';

import App from './App';

import './assets/less/main.less';

dayjs.extend(duration);

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
