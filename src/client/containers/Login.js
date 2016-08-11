import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';
import { SelectTaskListPage } from '../components/pages';
import { LoginButton } from '../components/inputs';

let Login = (props) => {
    const { dispatch } = props;

    let buildLoginInputs = (username, password) => {
        console.log('Login', username, password);
        dispatch(login({
            username: username,
            password: password
        }));
    };
    console.log('buildLoginInputs',buildLoginInputs);
    return (
        <SelectTaskListPage onSubmit={buildLoginInputs} />
    );
};

Login = connect()(Login);

export default Login;