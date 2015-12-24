import React from 'react';

export class TodoView extends React.Component {
    constructor(props) {
        super(props);
    }

    onEdit(e) {
        e.preventDefault();
        this.props.handleTodoEdit(this.props.id)
    }

    onComplete(e) {
        e.preventDefault();
        this.props.handleTodoComplete(this.props.id, !this.props.isCompleted);
    }

    onDelete(e) {
        e.preventDefault();
        this.props.handleTodoDelete();
    }

    onCheckboxClick() {
        this.props.handleTodoSelect();
    }

    render() {
        return (<div>
                <input type="checkbox" checked={this.props.isSelected} onClick={this.onCheckboxClick.bind(this)}/>
                <div className="row"><b>{this.props.title}</b>&nbsp;<span className="status">Status: {this.props.isCompleted ? "Done" : "Not done"}</span>&nbsp;
                    <div className="actions">
                        <a href="javascript:void(0)" onClick={this.onEdit.bind(this)}>Edit</a>&nbsp;
                        <a href="javascript:void(0)" onClick={this.onComplete.bind(this)}>{!this.props.isCompleted ? "Complete" : "Reopen"}</a>&nbsp;
                        <a href="javascript:void(0)" onClick={this.onDelete.bind(this)}>Delete</a>
                    </div>
                    </div>
                </div>)
    }
}
