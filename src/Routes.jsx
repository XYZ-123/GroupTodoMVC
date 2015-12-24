import React from 'react';
import {Route} from 'react-router';
import {MainWindow} from './Main';
import Statistics from './Components/Statistics/Statistics';
import TodoList from './Components/TodoList/TodoList';


export default function getRoutes()
{
    return (<Route path="/" component={MainWindow}>
                    <Route path="Todos" component={TodoList} />
                    <Route path="Stats" component={Statistics} />
                </Route>);
};
