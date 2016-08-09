import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSave from 'material-ui/svg-icons/content/save';

class SaveButton extends React.Component{
    render() {
        return (
            <FloatingActionButton type="submit" onClick={this.props.onClick} className="floatingButton-fixed-br">
                <ContentSave />
            </FloatingActionButton>
        );
    }
};

export default SaveButton;