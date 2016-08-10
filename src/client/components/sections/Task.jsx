import React from 'react';
import { Link } from 'react-router';
import {
    FlatButton
} from 'material-ui';

import {
    Card,
    CardActions,
    CardHeader,
    CardText
} from 'material-ui/Card';

import DateTimeFormat from '../../utils/dateTimeFormat.js';

// import ToggleTask from '../../containers/ToggleTask.js';

import { StatusButton } from '../inputs';

class Task extends React.Component{
    render() {
        let task = this.props.task;

        let dtFormat = new DateTimeFormat('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format;

        const PRIORITY_COLORS = {
            1: '#FF1B47',
            2: '#E8CC0D',
            3: '#657892'
        }

        return (
            <Card className={(task.status) ? "task task-outer task-outer-complete" : "task task-outer"}>
                <div className="task-priority" style={{backgroundColor: PRIORITY_COLORS[task.priority]}} />
                <CardHeader
                    title={task.description}
                    className={(task.status) ? "task-visible task-visible-complete" : "task-visible"}
                    subtitle={dtFormat(task.targetDate)}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardActions expandable={true}>
                    <StatusButton onClick={() => { this.props.onTaskToggleClick(task.id, task.status)}} label={(task.status) ? "RE-OPEN" : "COMPLETE"} />
                    <Link to={'/edit/'+task.id}><FlatButton label="Edit" /></Link>
                </CardActions>
            </Card>
        );
    }
};

export default Task;