// React Imports
import React from 'react';
import {render} from 'react-dom';
// Redux Imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Router Imports
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// Material UI Imports
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// App Imports
import muiTheme from './styles/themes/muiTheme';
import AppWrapper from './components/AppWrapper.jsx';
import taskApp from './reducers';
import {
    ManageTask,
    Home
} from './components/pages';
import AddTask from './containers/AddTask.js';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(taskApp);
console.log('store', store);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            {
            // <Router>
            //     <Route path="/" component={AppWrapper}>
            //         <IndexRoute component={Home} />
            //         <Route path="*" component={ManageTask} />
            //      </Route>
            // </Router>
            }
            {
            <Router history={history}>
                <Route path="/" component={AppWrapper}>
                    <IndexRoute name="home" component={Home} />
                    <Route name="edit" path="edit" component={ManageTask} />
                    <Route name="add" path="add" component={AddTask} />
                </Route>
            </Router>
            }
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('react')
);