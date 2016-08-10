import React from 'react';

class TaskId extends React.Component{
    constructor() {
        super();
        this.state = {
            value: 'new'
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
                ref="taskId"
                name="taskId"
            />
        );
    }
};

export default TaskId;