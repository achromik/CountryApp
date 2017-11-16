import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';     

import DevTools from "./DevTools";
import { getCountries } from "../src/actions/actions-countries";

render(
    <Provider store = {store}>
        <div>
        <h1>Initialize project</h1>
        <DevTools />
        </div>
    </Provider>    
    , document.getElementById('root')
);

store.dispatch(getCountries());
