import React from 'react';
import moment from 'moment';
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

    componentWillMount() {
        if (_.get(this.props, 'value', false))
            this.setState({
                value: this.props.value
            });
    }

    _handleFieldChange(e, target_date) {
        this.setState({
            value: target_date,
        });
    }

    render() {
        return (
            <DatePicker
                floatingLabelText="Target Date"
                hintText="When do you expect to complete this task?"
                name="target_date"
                onChange={this._handleFieldChange}
                defaultDate={this.state.value}
                firstDayOfWeek={0}
                fullWidth={true}
                formatDate={(dateObj) => { return moment(dateObj).format('dddd, MMMM D, YYYY'); }}
            />
        );
    }
};

export default TargetDate;