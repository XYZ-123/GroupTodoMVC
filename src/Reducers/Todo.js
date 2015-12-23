/**
 * Created by aru on 12/23/2015.
 */
import actionTypes from '../Actions/actionTypes';

export function Todo(state=[],action={})
{
    switch(action.type)
    {
        case actionTypes.CREATE_TODO:
            return [...state, action.todo];
        case actionTypes.UPDATE_TODO:
            return state.map(item => item.id == action.id ? Object.assign({}, item, ...action.todo): item);
        case actionTypes.DELETE_TODO:
            return state.filter(item => item.id !== action.id);
        default :
            return state;
    }
}
