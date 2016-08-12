import React from 'react';
import _ from 'lodash';

import Task from './Task.jsx';

class TaskList extends React.Component{
    componentWillMount() {
          if (!_.get(this.props, 'taskListId', false))
                return this.props.redirectToSelectTaskList()
    }

    render() {
        let {
            tasks,
            visibilityFilter
        } = this.props;

        let noTasksMessage = 'Add your first task!';
        if (visibilityFilter === 'COMPLETE')
            noTasksMessage = 'You haven\'t completed any tasks yet. Get to it!';
        else if (visibilityFilter === 'TODO')
            noTasksMessage = 'You don\'t have anything to do.';

        return (
            <div>
                {tasks.length ?
                    _.map(tasks, (task, i) => {
                        return (
                            <Task key={i} task={task} onTaskToggleClick={this.props.onTaskToggleClick} />
                        );
                    })
                :
                    <p>{noTasksMessage}</p>
                }
            </div>
        );
    }
};

export default TaskList;