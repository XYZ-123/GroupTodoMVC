import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>
    ({
        todos: state.todos
    });

export class Statistics extends React.Component {

    static propTypes = {
        todos: React.PropTypes.array
    };

    constructor(props)
    {
        super(props);
    }

    render()
    {
        let todos = this.props.todos;
        let percentage = (todos.filter(todo => todo.isCompleted).length / todos.length) * 100;
        return (<div style={{textAlign:"center"}}><b>Done: </b> {percentage}%</div>);
    }
}

export default connect(mapStateToProps)(Statistics)
