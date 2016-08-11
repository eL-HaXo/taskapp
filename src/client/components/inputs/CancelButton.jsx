import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

import { Link } from 'react-router';

class CancelButton extends React.Component{
    render() {
        return (
            <Link to="/tasklist">
                <FlatButton
                    label="Cancel"
                    icon={<NavigationCancel />}
                />
            </Link>
        );
    }
};

export default CancelButton;