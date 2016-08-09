import React from 'react';
import _ from 'lodash';

import Task from './Task.jsx';

class TaskList extends React.Component{
    render() {
        let tasks = this.props.tasks;
        if (tasks.length)
            console.log('TaskList:', tasks, Task);
        return (
            <div>
                {tasks.length ?
                    _.map(tasks, (task, i) => {
                        return (
                            <Task key={i} task={task} />
                        );
                    })
                :
                    <p>{'You don\'t have any tasks'}</p>
                }
            </div>
        );
    }
};

export default TaskList;