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
    Status,
    Description,
    TargetDate,
    Priority,
    SaveButton,
    CancelButton
} from '../inputs';

class ManageTask extends React.Component{
    constructor() {
        super();
        this._submitForm = this._submitForm.bind(this);
    }

    _submitForm(e, taskId, description, targetDate, priority, status) {
        e.preventDefault();
        this.props.onSubmit(
            taskId.state.value,
            description.state.value,
            targetDate.state.value,
            priority.state.value,
            status.state.value
        );
    }

    render() {
        let formTitle = 'Add Task';
        let formSubTitle = 'Fill out the fields below to create a new task';
        let task = _.get(this.props, 'task', {});
        let description, targetDate, priority, taskId, status;
        let valueDescription = task.description || "";

        let taskStatus = _.get(task, 'status', 0);

        return (
            <div className="content-padding">
                <form onSubmit={(e) => { this._submitForm(e, taskId, description, targetDate, priority, status); }}>
                    <TaskId
                        ref={node => {
                            taskId = node;
                        }}
                        value={task.id || 'new'} />
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
                                        targetDate = node;
                                    }}
                                    value={task.targetDate || ''} />
                            </div>
                            <div>
                                <Priority
                                    ref={node => {
                                        priority = node;
                                    }}
                                    value={task.priority || ''} />
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