import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class StatusButton extends React.Component{
    render() {
        return (
            <FlatButton type="submit" onClick={this.props.onClick} label={(this.props.status) ? "Re-open" : "Complete" } primary={true} />
        );
    }
};

export default StatusButton;