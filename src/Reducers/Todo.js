/**
 * Created by aru on 12/23/2015.
 */
import actionTypes from '../Actions/actionTypes';
import {getNewState} from '../Helper/GetNewState';

export function Todo(state=[],action={})
{
    switch(action.type)
    {
        case actionTypes.CREATE_TODO:
            return getNewState(state, [...state.todos, action.todo]);
        case actionTypes.UPDATE_TODO:
            return getNewState(state, state.map(item => item.id === action.id ? Object.assign({}, item, ...action.todo): item));
        case actionTypes.DELETE_TODO:
            return getNewState(state, state.filter(item => item.id !== action.id));
        case actionTypes.LOAD_TODOS:
            return {"todos":[{id:'4fef05e2-1ea7-4b1e-8608-fb919bf5c899', title:'Test todo 1'}, {id:'7d21a725-0a30-45e2-a65e-29f9ac7f77f4', title:'Test todo 2'}]};
        default :
            return state;
    }
}
