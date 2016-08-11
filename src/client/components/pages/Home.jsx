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

import DateTimeFormat from '../../utils/dateTimeFormat.js';

class TaskList extends React.Component{
    render() {
        let tasks = [{
            description: 'This is a description of a task.',
            target_date: new Date(),
            priority: 3,
            status: 1
        }, {
            description: 'I have a much longer task that I need to complete but it is not due for a quite a while so it\'s low priority.',
            target_date: new Date(),
            priority: 1,
            status: 0
        }];

        let dtFormat = new DateTimeFormat('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format;

        return (
            <div>
                <ViewControls />
                <div className="content-padding">
                    <VisibleTasks />
                    {
                        // _.map(tasks, (task, i) => {
                        //     return (
                        //         <Task key={i} task={task} />
                        //     );
                        // })
                    }
                    <GoToAddTask />
                </div>
            </div>
        );
    }
};

export default TaskList;