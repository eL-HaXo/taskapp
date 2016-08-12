import React from 'react';

class TaskListId extends React.Component{
    constructor() {
        super();
        this.state = {
            value: null
        };
    }

    componentWillMount() {
        this.setState({
            value: this.props.value
        });
    }

    render() {
        return (
            <input
                type="hidden"
                value={this.props.value}
                ref="tasklistId"
                name="tasklistId"
            />
        );
    }
};

export default TaskListId;