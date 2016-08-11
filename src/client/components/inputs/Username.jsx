import React from 'react';

import TextField from 'material-ui/TextField';

class Description extends React.Component{
    constructor() {
        super();
        this. _handleFieldChange = this. _handleFieldChange.bind(this);
        this.state = {
            value: ''
        };
    }

    componentWillMount() {
        this.setState({
            value: this.props.value
        })
    }

    _handleFieldChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <TextField
                onChange={this._handleFieldChange}
                ref="username"
                floatingLabelText="Username"
                name="username"
                hintText="Enter the username you were provided."
                fullWidth={true}
                required={true}
            />
        );
    }
};

export default Description;