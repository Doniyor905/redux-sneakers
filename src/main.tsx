import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const rootElem = document.getElementById('root');

if (rootElem) {
  createRoot(rootElem).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
}
