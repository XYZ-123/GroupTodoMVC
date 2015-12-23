/**
 * Created by aru on 12/23/2015.
 */
import {createAction} from 'redux-actions'
export const CREATE_TODO = 'CREATE_TODO';
export default createAction(CREATE_TODO,({todo}) => {todo});
