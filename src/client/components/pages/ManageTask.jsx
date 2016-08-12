import React from 'react';
import {connect} from 'react-redux'
import {addTask} from '../../actions'
import {Link} from 'react-router';
import {
    Card,
    CardTitle,
    CardText
} from 'material-ui/Card';

// Form Inputs
import  {
    TaskId,
    TaskListId,
    Status,
    Description,
    TargetDate,
    Priority,
    SaveButton,
    CancelButton
} from '../inputs';

import {
    dateToString,
    stringToDate
} from '../../utils/dateConversion.js';

class ManageTask extends React.Component{
    constructor() {
        super();
        this._submitForm = this._submitForm.bind(this);
    }

    componentWillMount() {
        if (!_.get(this.props, 'tasklistId', false))
            return this.props.redirectToSelectTaskList();
    }

    _submitForm(e, tasklistId, taskId, description, target_date, priority, status) {
        e.preventDefault();
        this.props.onSubmit({
            taskId: taskId.state.value,
            tasklistId: tasklistId.state.value,
            description: description.state.value,
            target_date: dateToString(target_date.state.value),
            priority: priority.state.value,
            status: status.state.value
        });
    }

    render() {
        let formTitle = this.props.title || 'Add Task';
        let formSubTitle = this.props.subtitle || 'Fill out the fields below to create a new task';
        let task = _.get(this.props, 'task', {});
        let description, target_date, priority, taskId, status, tasklistId;
        let valueDescription = task.description || "";

        let taskStatus = _.get(task, 'status', false);
        let targetDate = (task.target_date) ? stringToDate(task.target_date) : '';
        return (
            <div className="content-padding">
                <form onSubmit={(e) => { this._submitForm(e, tasklistId, taskId, description, target_date, priority, status); }}>
                    <TaskId
                        ref={node => {
                            taskId = node;
                        }}
                        value={task.task_id || 'new'} />
                    <TaskListId
                        ref={node => {
                            tasklistId = node;
                        }}
                        value={this.props.tasklistId} />
                    <Status
                        ref={node => {
                            status = node;
                        }}
                        value={taskStatus} />
                    <Card className="form">
                        <CardTitle
                            title={formTitle}
                            subtitle={formSubTitle}
                        />
                        <CardText>
                            <div>
                                <Description
                                    ref={node => {
                                        description = node;
                                    }}
                                    value={valueDescription} />
                            </div>
                            <div>
                                <TargetDate
                                    ref={node => {
                                        target_date = node;
                                    }}
                                    value={targetDate} />
                            </div>
                            <div>
                                <Priority
                                    ref={node => {
                                        priority = node;
                                    }}
                                    value={task.priority || 1} />
                            </div>
                        </CardText>
                        {this.props.children}
                    </Card>
                </form>
            </div>
        );
    }
};

export default ManageTask;