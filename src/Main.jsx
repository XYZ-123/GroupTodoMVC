// lib imports
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Provider} from 'react-redux';
import {Router, Link} from 'react-router';

// custom imports
import {Statistics} from './Components/Statistics/Statistics';
import {TodoList} from './Components/TodoList/TodoList';
import getRoutes from './Routes';
import rootReducer from './Reducers/App';

export class MainWindow extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (<div>
            <h2>Welcome to Group TodoMVC</h2>
                    <ul>
                        <li><Link to="Todos">Todo List</Link></li>
                        <li><Link to="Stats">Completion Statistics</Link></li>
                        </ul>
                </div>);
    }
}



let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(rootReducer);
let history = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
                    <Router history={history}>
                        {getRoutes()}
                    </Router>
                </Provider>, document.getElementById("content"));

