import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index';    
import routes from './routes'

import DevTools from './DevTools';
import { getCountries } from '../src/actions/actions-countries';

render(
    <Provider store = {store}>
        <div>
            <Router history={hashHistory} routes={routes}>
            </Router>
            <DevTools />
        </div>
    </Provider>    
    , document.getElementById('root')
);

store.dispatch(getCountries());

