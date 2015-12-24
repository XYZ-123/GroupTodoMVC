/**
 * Created by aru on 12/23/2015.
 */
import {createAction} from 'redux-actions';

export const UPDATE_SELECTED_TODOS = 'UPDATE_SELECTED_TODOS';

export default createAction(UPDATE_SELECTED_TODOS,(isCompleted=true)=>({isCompleted}));
