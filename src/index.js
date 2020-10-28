import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { OidcProvider, loadUser } from 'redux-oidc';
import rootReducer from './common/rootReducer';

import App from './App';
import { userManager } from './utils/userManager';
import rootSaga from './common/rootSaga';

const sagaMiddleware = createSagaMiddleware();
// thunk 用来使用 async action creator
const middlewares = [sagaMiddleware, thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
loadUser(store, userManager);

ReactDOM.render(
    <Provider store={store}>
        <OidcProvider store={store} userManager={userManager}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </OidcProvider>
    </Provider>,
    document.getElementById('root'),
);
