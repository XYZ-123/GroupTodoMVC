import React from 'react';
import {connect} from 'react-redux';

import actions from '../../Actions/actions';
import {Todo} from './Todo';
import {TodoCreateForm} from './TodoCreateForm';
import createGuid from '../../Helper/Guid';

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
        this.props.CreateTodo({id,title});
    }
    handleTodoSelect(id, isSelected)
    {
        var todoToUpdate = this.props.todos.find((todo) => todo.id === id);
        this.handleTodoUpdate(todoToUpdate.id, todoToUpdate.title, isSelected, todoToUpdate.isCompleted, todoToUpdate.isEdited);
    }
    handleTodoComplete(id, isCompleted = true)
    {
        var todoToUpdate = this.props.todos.find((todo) => todo.id === id);
        this.handleTodoUpdate(todoToUpdate.id, todoToUpdate.title, todoToUpdate.isSelected, isCompleted, todoToUpdate.isEdited);
    }
    handleTodoEdit(id, isEdited = true)
    {
        var todoToUpdate = this.props.todos.find((todo) => todo.id === id);
        this.handleTodoUpdate(todoToUpdate.id, todoToUpdate.title, todoToUpdate.isSelected, todoToUpdate.isCompleted, isEdited);
    }
    handleTodoUpdate(id, title, isSelected, isCompleted, isEdited)
    {
        this.props.UpdateTodo({id, title, isSelected, isCompleted, isEdited});
    }
    handleTodoDelete(id)
    {
        this.props.DeleteTodo(id);
    }
    render()
    {
        console.log(this.props);
        let self = this;
        let todos = this.props.todos.map((todo)=><Todo {...todo} handleTodoSelect={self.handleTodoSelect.bind(self)} handleTodoComplete={self.handleTodoComplete.bind(self)} handleTodoEdit={self.handleTodoEdit.bind(self)} handleTodoDelete={self.handleTodoDelete.bind(self)} />)

        return (<div>
                    <TodoCreateForm handleCreateTodo={this.handleTodoCreate.bind(this)} />
                    {todos}
                </div>);
    }
}

export default connect(mapStateToProps, actions)(TodoList)
