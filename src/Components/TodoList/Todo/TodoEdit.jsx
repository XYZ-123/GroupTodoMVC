import React from 'react';

export class TodoEdit extends React.Component {
    onSave(e)
    {
        e.preventDefault();
        this.props.handleUpdateTodo(this.refs.title.value);
        this.refs.title.value = "";
    }
    onCancel(e)
    {
        e.preventDefault();
        this.props.handleCancelEdit();
    }
    render ()
    {
        return (<div>
            <input ref="title" defaultValue={this.props.title}/>&nbsp;
            <a href="javascript:void(0)" onClick={this.onSave.bind(this)}>Save</a>&nbsp;
            <a href="javascript:void(0)" onClick={this.onCancel.bind(this)}>Cancel</a>
        </div>)
    }
}
