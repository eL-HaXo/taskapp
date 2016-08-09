// React Imports
import React from 'react';
import {render} from 'react-dom';
// Redux Imports
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
// Router Imports
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
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

const routes = (
    <Route path="/" component={AppWrapper}>
        <IndexRoute name="home" component={Home} />
        <Route name="edit" path="edit" component={ManageTask} />
        <Route name="add" path="add" component={AddTask} />
    </Route>
);

// let store = createStore();
const store = compose(
    reduxReactRouter({
        routes,
        createHistory
    })
)(createStore)(taskApp);

render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            {
            // <Router history={history}>
            //     <Route path="/" component={AppWrapper}>
            //         <IndexRoute name="home" component={Home} />
            //         <Route name="edit" path="edit" component={ManageTask} />
            //         <Route name="add" path="add" component={AddTask} />
            //     </Route>
            // </Router>
            }
            <ReduxRouter>
                {routes}
            </ReduxRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('react')
);