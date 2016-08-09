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

    _handleFieldChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        let input;
        return (
            <TextField
                onChange={this._handleFieldChange}
                value={this.state.value}
                ref="description"
                floatingLabelText="Description"
                name="description"
                hintText="What is your task?"
                fullWidth={true}
                required={true}
                multiLine={true}
            />
        );
    }
};

export default Description;