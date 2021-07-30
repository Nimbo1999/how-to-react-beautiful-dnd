import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

import './assets/less/main.less';

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
