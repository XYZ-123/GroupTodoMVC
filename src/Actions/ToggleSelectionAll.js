/**
 * Created by aru on 12/23/2015.
 */
import {createAction} from 'redux-actions';

export const TOGGLE_SELECTION_ALL = 'TOGGLE_SELECTION_ALL';

export default createAction(TOGGLE_SELECTION_ALL,selection => ({selection}));
