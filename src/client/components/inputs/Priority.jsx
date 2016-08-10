import React from 'react';

import {
    SelectField,
    MenuItem
} from 'material-ui';

class Priority extends React.Component{
    constructor() {
        super();
        this. _handleFieldChange = this. _handleFieldChange.bind(this);
        this.state = {
            value: 1
        };
    }

    _handleFieldChange(e, k, payload) {
        this.setState({
            value: payload
        });
    }

    render() {
        return (
            <SelectField
                fullWidth={true}
                onChange={this._handleFieldChange}
                name="priority"
                floatingLabelText="Priority"
                floatingLabelFixed={true}
                value={this.state.value}>
                <MenuItem value={1} primaryText="High" />
                <MenuItem value={2} primaryText="Medium" />
                <MenuItem value={3} primaryText="Low" />
            </SelectField>
        );
    }
};

export default Priority;