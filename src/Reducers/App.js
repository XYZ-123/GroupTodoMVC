/**
 * Created by aru on 12/22/2015.
 */
import {combineReducers} from 'redux';
import {todos} from './SelectedTodos';
import {todo} from './Todo';
let reducers = combineReducers({todos, todo});
export default combineReducers({todos, todo});
