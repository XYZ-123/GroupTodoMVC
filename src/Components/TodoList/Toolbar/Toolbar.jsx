import React from 'react';
import './Toolbar.less';

export class Toolbar extends React.Component {
    constructor(props)
    {
        super(props);
    }
    onCheckboxClick()
    {
        console.log(this.refs.selection.checked);
        this.props.handleSelectionChange(this.refs.selection.checked);
    }
    render()
    {
        return (<div className="toolbar">
                    <input ref="selection" type="checkbox" checked={this.props.selected} onClick={this.onCheckboxClick.bind(this)} />
                    <button className="btn btn-default Delete" disabled={!this.props.selected} onClick={this.props.handleDelete}>Delete</button>
                    <button className="btn btn-default Complete" disabled={!this.props.selected} onClick={this.props.handleComplete}>Complete</button>
                </div>)
    }
}
