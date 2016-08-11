import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addTask } from '../actions';
// import { Link } from 'react-router';
import { CardActions } from 'material-ui/Card';

import { AddButton } from '../components/inputs';


let GoToAddTask = ({ dispatch }) => {
    let goToAddTask = () => {
        dispatch(push('/add'));
    }
    let tasklistId = 123;
    return (
        <Link to={'/add'}><AddButton /></Link>
    );
};

GoToAddTask = connect()(GoToAddTask);

export default GoToAddTask;