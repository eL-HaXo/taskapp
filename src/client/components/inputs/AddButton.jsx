import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import {Link} from 'react-router';

import { browserHistory } from 'react-router';


class AddButton extends React.Component{
    // goToAddTask() {
    //     browserHistory.push('/add');
    // }

    render() {
        return (
            <FloatingActionButton onClick={this.props.onClick} className="floatingButton-fixed-br">
                <ContentAdd />
            </FloatingActionButton>
        );
    }
};

export default AddButton;