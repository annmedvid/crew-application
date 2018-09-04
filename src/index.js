import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './rootReducer';
import App from './App';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
