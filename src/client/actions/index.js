let nextTaskId = 0
export const addTask = (inputs) => {
    console.log('addTask', inputs);
    return {
        type: 'ADD_TASK',
        id: nextTaskId++,
        description: inputs.description,
        priority: inputs.priority,
        targetDate: inputs.targetDate
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        id
    }
}