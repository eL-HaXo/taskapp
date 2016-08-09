import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

class CancelButton extends React.Component{
    render() {
        return (
            <FlatButton
                label="Cancel"
                icon={<NavigationCancel />}
            />
        );
    }
};

export default CancelButton;