import React from 'react';
import {
    FlatButton
} from 'material-ui';

import {
    Card,
    CardActions,
    CardHeader,
    CardText
} from 'material-ui/Card';

console.log('Task.jsx');
import DateTimeFormat from '../../utils/dateTimeFormat.js';

class Task extends React.Component{
    render() {
        let task = this.props.task;
        // console.log('Task:', task);
        let dtFormat = new DateTimeFormat('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format;

        return (
            <Card className={(task.status) ? "task task-outer task-outer-complete" : "task task-outer"}>
                <CardHeader
                    title={task.description}
                    className={(task.status) ? "task-visible task-visible-complete" : "task-visible"}
                    subtitle={dtFormat(task.targetDate)}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardActions expandable={true}>
                    <FlatButton label={(task.status) ? "Re-open" : "Complete" } primary={true} />
                    <FlatButton label="Edit" />
                </CardActions>
            </Card>
        );
    }
};

export default Task;