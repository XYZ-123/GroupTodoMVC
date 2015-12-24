import React from 'react';
import {connect} from 'react-redux';

import actions from '../../Actions/actionTypes';

const mapStateToProps = (state) =>
    ({
    todos: state.todos
});

export class TodoList extends React.Component {
    static propTypes = {
        todos: React.PropTypes.array
    }
    constructor(props)
    {
        super(props);
    }
    render()
    {
        console.log(this.props);
        return (<div>Hello from todoList</div>);
    }
}

export default connect(mapStateToProps, actions)(TodoList)
