import React from 'react';

class Status extends React.Component{
    constructor() {
        super();
        this.state = {
            value: 0
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
                ref="status"
                name="status"
            />
        );
    }
};

export default Status;