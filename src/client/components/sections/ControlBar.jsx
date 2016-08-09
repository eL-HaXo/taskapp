import React from 'react';

import {
    IconButton,
    IconMenu,
    MenuItem
} from 'material-ui';

import {
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from 'material-ui/Toolbar';

import ContentSort from 'material-ui/svg-icons/content/sort';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';

class ControlBar extends React.Component{
    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="View Options" />
                </ToolbarGroup>
                <ToolbarGroup firstChild={true}>
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <ContentSort />
                            </IconButton>
                        }>
                        <MenuItem primaryText="Priority" />
                        <MenuItem primaryText="Target Date" />
                        <MenuItem primaryText="Description" />
                    </IconMenu>
                    <ToolbarSeparator />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <ContentFilterList />
                            </IconButton>
                        }>
                        <MenuItem primaryText="All" />
                        <MenuItem primaryText="Todo" />
                        <MenuItem primaryText="Complete" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
};

export default ControlBar;