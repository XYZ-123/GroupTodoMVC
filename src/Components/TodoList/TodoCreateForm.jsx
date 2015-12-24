import React from 'react';

export class TodoCreateForm extends React.Component {
    onSave(e)
    {
        e.preventDefault();
        this.props.handleCreateTodo(this.refs.title.value);
        this.refs.title.value = "";
    }
    render ()
    {
        return (<div>
                    <input className="form-control TodoInput" ref="title" />&nbsp;
                    <button className="btn btn-primary" onClick={this.onSave.bind(this)}>Add</button>
                </div>)
    }
}
