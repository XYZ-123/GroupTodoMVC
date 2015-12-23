/**
 * Created by aru on 12/23/2015.
 */
import actionTypes from '../Actions/actionTypes';
import {getNewState} from '../Helper/GetNewState';

export function todo(state=[],action)
{
    switch(action.type)
    {
        case actionTypes.CREATE_TODO:
            return getNewState(state, [...state.todos, action.todo]);
        case actionTypes.UPDATE_TODO:
            return getNewState(state, state.map(item => item.id === action.id ? Object.assign({}, item, ...action.todo): item));
        case actionTypes.DELETE_TODO:
            return getNewState(state, state.filter(item => item.id !== action.id));
        default :
            return state;
    }
}
