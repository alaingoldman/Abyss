import {Route, Switch} from 'react-router-dom';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import Header from './common/Header';
import HomePage from './home/HomePage';
import NoMatchPage from './noMatch/NoMatchPage';
import React from 'react';
import TaskPage from './task/TaskPage';

const App = () => (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/courses" component={CoursesPage} />
            <Route path="/about"   component={AboutPage} />
            <Route path="/task"    component={TaskPage} />
            <Route component={NoMatchPage}/>
        </Switch>
    </div>
);

export default App;