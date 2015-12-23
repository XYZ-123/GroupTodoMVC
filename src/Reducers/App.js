/**
 * Created by aru on 12/22/2015.
 */
import {combineReducers} from 'redux';
import {SelectedTodos} from './SelectedTodos';
import {Todo} from './Todo';

export default combineReducers(SelectedTodos, Todo);
