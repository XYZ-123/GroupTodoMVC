import React from 'react';

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
        return (<div>
                    <input ref="selection" type="checkbox" checked={this.props.selected} onClick={this.onCheckboxClick.bind(this)} />
                    <button disabled={!this.props.selected} onClick={this.props.handleDelete}>Delete</button>
                    <button disabled={!this.props.selected} onClick={this.props.handleComplete}>Complete</button>
                </div>)
    }
}
