/**
 * Created by aru on 12/23/2015.
 */
export function getNewState(state, todos)
{
    return Object.assign({}, state,{todos});
}
