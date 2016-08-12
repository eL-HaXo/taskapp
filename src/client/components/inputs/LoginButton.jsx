import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LoginButton extends React.Component{
    render() {
        return (
            <RaisedButton
                label="Go to your list"
                primary={true}
                fullWidth={true}
                type="submit"
            />
        );
    }
};

export default LoginButton;