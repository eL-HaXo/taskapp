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

class Login extends React.Component{
    constructor() {
        super();
        this._submitForm = this._submitForm.bind(this);
    }

    _submitForm(e, username, password) {
        e.preventDefault();
        console.log('this.props.onSubmit',this.props.onSubmit);
        this.props.onSubmit(
            username.state.value,
            password.state.value
        );
    }

    render() {
        let username, password;
        console.log('LOGIN');
        return (
            <div className="content-padding">
                <form onSubmit={(e) => { this._submitForm(e, username, password); }}>
                    <Card className="form">
                        <CardTitle
                            title="Login"
                        />
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

export default Login;