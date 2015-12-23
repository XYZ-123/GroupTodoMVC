/**
 * Created by aru on 12/23/2015.
 */
import {createAction} from 'redux-actions';

export const DELETE_TODO = 'DELETE_TODO';

export default createAction(DELETE_TODO, id => id);
