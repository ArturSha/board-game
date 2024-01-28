import ReactDOM from 'react-dom/client';
import App from './1app/App';
import './1app/styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './1app/providers/storeProvider/config/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
