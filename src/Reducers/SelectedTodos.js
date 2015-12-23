/**
 * Created by aru on 12/23/2015.
 */
import actionTypes from '../Actions/actionTypes';
import {getNewState} from '../Helper/GetNewState';

export function SelectedTodos(state = [],action ={})
{
    switch(action.type)
    {
        case actionTypes.TOGGLE_SELECTION_ALL:
            return getNewState(state, state.map(item => Object.assign({}, item, {isSelected: action.selection})));
        case actionTypes.UPDATE_SELECTED_TODOS:
            return getNewState(state, state.map(item => item.isSelected ? Object.assign({}, item, {isCompleted: action.isCompleted}): item));
        case actionTypes.DELETE_SELECTED_TODOS:
            return getNewState(state, state.todos.filter(item => !item.isSelected));
        default :
            return state;
    }
}
