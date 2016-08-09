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

    _submitForm(e, description, targetDate, priority) {
        e.preventDefault();
        this.props.onSubmit(description.state.value, targetDate.state.value, priority.state.value);
    }

    render() {
        let formTitle = 'Add Task';
        let formSubTitle = 'Fill out the fields below to create a new task';
        let description, targetDate, priority;
        return (
            <div className="content-padding">
                <form onSubmit={(e) => { this._submitForm(e, description, targetDate, priority); }}>
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
                                    value={this.props.description || ''} />
                            </div>
                            <div>
                                <TargetDate
                                    ref={node => {
                                        targetDate = node;
                                    }}
                                    value={this.props.targetDate || ''} />
                            </div>
                            <div>
                                <Priority
                                    ref={node => {
                                        priority = node;
                                    }}
                                    value={this.props.priority || ''} />
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