import React from 'react';

export class TodoList extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        console.log(this.props);
        return (<div>Hello from todoList</div>);
    }
}

