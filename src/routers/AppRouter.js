import React from 'react';
import {BrowserRouter, Link, Route, Switch, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import AddExpensePage from '../components/AddExpensePage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);


export default AppRouter;
