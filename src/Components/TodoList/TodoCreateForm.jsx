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
                    <input ref="title" value={this.props.title}/>&nbsp;
                    <button  onClick={this.onSave.bind(this)}>Save</button>
                </div>)
    }
}
