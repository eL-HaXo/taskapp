import React from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-router';
import { addTask } from '../actions';
// import { Link } from 'react-router';
import { CardActions } from 'material-ui/Card';

import { AddButton } from '../components/inputs';


let GoToAddTask = ({ dispatch }) => {
    let goToAddTask = () => {
        dispatch(push('/add'));
    }

    return (
        <AddButton onClick={goToAddTask} />
    );
};

GoToAddTask = connect()(GoToAddTask);

export default GoToAddTask;