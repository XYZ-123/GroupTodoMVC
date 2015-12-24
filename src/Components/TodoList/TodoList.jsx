import React from 'react';
import {connect} from 'react-redux';

import actions from '../../Actions/actions';
import {Todo} from './Todo/Todo';
import {TodoCreateForm} from './TodoCreateForm';
import createGuid from '../../Helper/Guid';
import {Toolbar} from './Toolbar/Toolbar';
import {TodoEditForm} from './TodoCreateForm';
import './TodoList.less';

const mapStateToProps = (state) =>
    ({
    todos: state.todos
});

export class TodoList extends React.Component {

    static propTypes = {
        todos: React.PropTypes.array
    };

    constructor(props)
    {
        super(props);
    }
    handleTodoCreate(title)
    {
        let id = createGuid();
        this.props.CreateTodo({id, title});
    }
    handleTodoSelect(id, isSelected)
    {
        var todoToUpdate = this.props.todos.find((todo) => todo.id === id);
        this.props.UpdateTodo(Object.assign({},todoToUpdate,{isSelected}));
    }
    handleTodoComplete(id, isCompleted = true)
    {
        var todoToUpdate = this.props.todos.find((todo) => todo.id === id);
        this.props.UpdateTodo(Object.assign({},todoToUpdate,{isCompleted}));
    }
    handleTodoEditChange(id, isEdited = true) {
        var todoToUpdate = this.props.todos.find((todo) => todo.id === id);
        this.props.UpdateTodo(Object.assign({}, todoToUpdate, {isEdited}));
    }
    handleTodoDelete(id)
    {
        this.props.DeleteTodo(id);
    }
    render()
    {
        let self = this;
        let todoElems = this.props.todos.map( todo =>  <Todo
                                                        todo={todo}
                                                        handleTodoUpdate={self.props.UpdateTodo}
                                                        handleTodoSelect={self.handleTodoSelect.bind(self)}
                                                        handleTodoComplete={self.handleTodoComplete.bind(self)}
                                                        handleTodoEditChange={self.handleTodoEditChange.bind(self)}
                                                        handleTodoDelete={self.handleTodoDelete.bind(self)} />);

        var selected = this.props.todos.some(todo => todo.isSelected);

        return (<div className="TodoList">
                    <TodoCreateForm handleCreateTodo={this.handleTodoCreate.bind(this)} />
                    <Toolbar selected={selected}
                             handleSelectionChange={self.props.ToggleSelectionAll}
                             handleDelete={self.props.DeleteSelectedTodos}
                             handleComplete={self.props.UpdateSelectedTodos} />
                    {todoElems}
                </div>);
    }
}

export default connect(mapStateToProps, actions)(TodoList)
