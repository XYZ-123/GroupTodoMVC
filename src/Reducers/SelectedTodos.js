/**
 * Created by aru on 12/23/2015.
 */
import actionTypes from '../Actions/actionTypes';
import {getNewState} from '../Helper/GetNewState';

export function todos(state = [],action)
{
    switch(action.type)
    {
        case actionTypes.TOGGLE_SELECTION_ALL:
            return getNewState(state, state.map(item => Object.assign({}, item, {isSelected: action.selection})));
        case actionTypes.UPDATE_SELECTED_TODOS:
            return getNewState(state, state.map(item => item.isSelected ? Object.assign({}, item, {isCompleted: action.isCompleted}): item));
        case actionTypes.DELETE_SELECTED_TODOS:
            return getNewState(state, state.todos.filter(item => !item.isSelected));
        case actionTypes.LOAD_TODOS:
            return [{id:'4fef05e2-1ea7-4b1e-8608-fb919bf5c899', title:'Test todo 1'}, {id:'7d21a725-0a30-45e2-a65e-29f9ac7f77f4', title:'Test todo 2'}];
        default :
            return state;
    }
}
