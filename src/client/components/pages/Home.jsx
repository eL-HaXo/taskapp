import React from 'react';
import _ from 'lodash';

import {
    FlatButton,
    IconButton,
    IconMenu,
    MenuItem
} from 'material-ui';

import {
    Card,
    CardActions,
    CardHeader,
    CardText
} from 'material-ui/Card';

import GoToAddTask from '../../containers/GoToAddTask.js';
import VisibleTasks from '../../containers/VisibleTasks.js';
import ViewControls from '../../containers/ViewControls.js';

import {
    AddButton
} from '../inputs';

import {
    ControlBar,
    Task
} from '../sections';

class TaskList extends React.Component{
    render() {
        return (
            <div>
                <ViewControls />
                <div className="content-padding">
                    <VisibleTasks />
                    <GoToAddTask />
                </div>
            </div>
        );
    }
};

export default TaskList;