import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import DateTimeFormat from '../../utils/dateTimeFormat.js';

class TargetDate extends React.Component{
    constructor() {
        super();
        this. _handleFieldChange = this. _handleFieldChange.bind(this);
        this.state = {
            value: new Date()
        };
    }

    _handleFieldChange(e, targetDate) {
        this.setState({
            value: targetDate,
        });
    }

    render() {
        return (
            <DatePicker
                floatingLabelText="Target Date"
                hintText="When do you expect to complete this task?"
                name="targetDate"
                onChange={this._handleFieldChange}
                defaultDate={this.state.value}
                firstDayOfWeek={0}
                fullWidth={true}
                formatDate={new DateTimeFormat('en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }).format}
            />
        );
    }
};

export default TargetDate;