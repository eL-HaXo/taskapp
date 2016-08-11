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
                        }
                        onChange={this.props.onSortOrderChange}
                        value={this.props.sortField}>
                        <MenuItem value="target_date" primaryText="Target Date" />
                        <MenuItem value="priority" primaryText="Priority" />
                        <MenuItem value="description" primaryText="Description" />
                    </IconMenu>
                    <ToolbarSeparator />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <ContentFilterList />
                            </IconButton>
                        }
                        onChange={this.props.onVisibilityFilterChange}
                        value={this.props.visibilityFilter}>
                        <MenuItem value="ALL" primaryText="All" />
                        <MenuItem value="TODO" primaryText="Todo" />
                        <MenuItem value="COMPLETE" primaryText="Complete" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
};

export default ControlBar;