import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';

// import redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer';

// khai báo thằng redux store.
const reduxStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    {/* Cấu hình thằng store (của thằng redux) */}
    {/* Dùng để thằng react khởi động cùng thằng react, 2 thằng chạy song song. */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
