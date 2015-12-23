/**
 * Created by aru on 12/23/2015.
 */
import {createAction} from 'redux-actions';

export const UPDATE_TODO = 'UPDATE_TODO';

export default createAction(UPDATE_TODO,({id, title, isSelected=false, isCompleted = false}) => ({"todo": {id, title, isSelected, isCompleted}}));
