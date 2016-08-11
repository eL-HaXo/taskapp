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
                type="password"
                onChange={this._handleFieldChange}
                ref="password"
                floatingLabelText="Password"
                name="password"
                hintText="Enter the password you were provided."
                fullWidth={true}
                required={true}
            />
        );
    }
};

export default Description;