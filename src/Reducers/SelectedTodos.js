/**
 * Created by aru on 12/23/2015.
 */
import actionTypes from '../Actions/actionTypes';

export function Selection(state = [],action ={})
{
    switch(action.type)
    {
        case actionTypes.TOGGLE_SELECTION_ALL:
            return state.map(item => Object.assign({}, item, {isSelected: action.selection}));
        case actionTypes.UPDATE_SELECTED_TODOS:
            return state.map(item => item.isSelected ? Object.assign({}, item, {isCompleted: action.isCompleted}): item);
        case actionTypes.DELETE_SELECTED_TODOS:
            return state.filter(item => !item.isSelected);
        default :
            return state;
    }
}
