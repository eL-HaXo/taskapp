import React from 'react';
import {connect} from 'react-redux'
import {addTask} from '../../actions'
import {Link} from 'react-router';
import {
    Card,
    CardTitle,
    CardText,
    CardActions
} from 'material-ui/Card';

// Form Inputs
import  {
    Username,
    Password,
    LoginButton
} from '../inputs';

class SelectTaskListPage extends React.Component{
    constructor() {
        super();
        this._submitForm = this._submitForm.bind(this);
    }

    _submitForm(e, username, password) {
        e.preventDefault();
        this.props.onSubmit(
            username.state.value,
            password.state.value
        );
    }

    render() {
        let username, password;
        return (
            <div className="content-padding">
                <div className="logo">
                    <div className="logo-oval">
                        <div className="logo-text">tasks</div>
                    </div>
                    <p className="logo-subtext">Enter a task list name and password to get started.</p>
                </div>
                <form onSubmit={(e) => { this._submitForm(e, username, password); }}>
                    <Card className="form">
                        {
                        // <CardTitle
                        //     title="Load Task List"
                        //     subtitle="Enter a new or existing task list name and password"
                        // />
                        }
                        <CardText>
                            <div>
                                <Username
                                    ref={node => {
                                        username = node;
                                    }} />
                            </div>
                            <div>
                                <Password
                                    ref={node => {
                                        password = node;
                                    }} />
                            </div>
                        </CardText>
                        <CardActions>
                            <LoginButton />
                        </CardActions>
                    </Card>
                </form>
            </div>
        );
    }
};

export default SelectTaskListPage;