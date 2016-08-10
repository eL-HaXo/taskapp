import { TASKLIST_VISIBILITY_FILTER } from '../actions';

const visibilityFilter = (state = 'ALL', action) => {
    switch (action.type) {
        case 'TASKLIST_VISIBILITY_FILTER':
            return action.visibilityFilter;
        default:
            return state;
    }
};

export default visibilityFilter;