import ReactDOM from 'react-dom/client';
import App from './1app/App';
import './1app/styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
