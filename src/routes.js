import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentional/navigation.component.jsx';
import Home from './presentional/home.component.jsx';
import Contact from './presentional/contact.component.jsx';
import NotFound from './presentional/not-found.component.jsx'

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='contact' component={Contact} />
        <Route path='*' component={NotFound} />
    </Route>
);