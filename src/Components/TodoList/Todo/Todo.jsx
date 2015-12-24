import React from 'react';

import {TodoView} from './TodoView';
import {TodoEdit} from './TodoEdit';
import './Todo.less';

export class Todo extends React.Component {
    constructor(props)
    {
        super(props);
    }
    get id()
    {
        return this.props.todo.id;
    }
    onEdit() {
        this.props.handleTodoEditChange(this.id)
    }
    onComplete()
    {
        this.props.handleTodoComplete(this.id, !this.props.todo.isCompleted);
    }
    onDelete()
    {
        this.props.handleTodoDelete(this.id);
    }
    onSelection()
    {
        this.props.handleTodoSelect(this.id, !this.props.todo.isSelected);
    }
    onEditCancel()
    {
        this.props.handleTodoEditChange(this.id, false);
    }
    onTodoUpdate(title)
    {
        this.props.handleTodoUpdate(Object.assign({}, this.props.todo, {isEdited:false, title:title}));
    }
    render ()
    {
        let model = this.props.todo;
        return (<div className="todo">
                    {   model.isEdited ?
                        <TodoEdit
                            title={model.title}
                            handleUpdateTodo={this.onTodoUpdate.bind(this)}
                            handleCancelEdit={this.onEditCancel.bind(this)}/>
                        :<TodoView
                            {...model}
                            handleTodoSelect={this.onSelection.bind(this)}
                            handleTodoDelete={this.onDelete.bind(this)}
                            handleTodoComplete={this.onComplete.bind(this)}
                            handleTodoEdit={this.onEdit.bind(this)}
                        />}
                </div>)
    }
}
