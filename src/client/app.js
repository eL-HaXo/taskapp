import 'babel-polyfill';
// React Imports
import React from 'react';
import {render} from 'react-dom';
// Redux Imports
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Router Imports
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { createHistory } from 'history';
// Material UI Imports
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// App Imports
import muiTheme from './styles/themes/muiTheme';
import AppWrapper from './components/AppWrapper.jsx';
import taskApp from './reducers';
import { Home } from './components/pages';
import Login from './containers/Login.js';
import AddTask from './containers/AddTask.js';
import EditTask from './containers/EditTask.js';

// Needed for onTouchTap
injectTapEventPlugin();

const routes = (
    <Route path="/" component={AppWrapper}>
        <IndexRoute name="login" component={Login} />
        <Route name="tasklist" path="tasklist" component={Home} />
        <Route name="edit" path="/edit/:taskId" component={EditTask} />
        <Route name="add" path="add" component={AddTask} />
    </Route>
);

const store = compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(taskApp);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('react')
);