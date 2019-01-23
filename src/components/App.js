import {Route, Switch} from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Api from '../api/Api.js';
import CoursesPage from './course/CoursesPage';
import Header from './common/Header';
import HomePage from './home/HomePage';
import NoMatchPage from './noMatch/NoMatchPage';
import React from 'react';
import TaskPage from './task/TaskPage';

const api = new Api;

const defaultProps = {
    api
};

const App = () => (
    <div>
        <Header/>
        <Switch {...defaultProps}>
            <Route exact path="/"    render={() =>(
                <HomePage {...defaultProps} />
            )} />
            <Route exact path="/courses"    render={() =>(
                <CoursesPage {...defaultProps} />
            )} />
            <Route exact path="/about"    render={() =>(
                <AboutPage {...defaultProps} />
            )} />
            <Route path="/task"    render={() =>(
                <TaskPage {...defaultProps} />
            )} />
            <Route component={NoMatchPage}/>
        </Switch>
    </div>
);

export default App;