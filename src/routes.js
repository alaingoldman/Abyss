import {IndexRoute, Route} from 'react-router';
import AboutPage from './components/about/AboutPage';
import App from './components/App';
import CoursesPage from './components/course/CoursesPage';
import HomePage from './components/home/HomePage';
import React from 'react';
import TaskPage from './components/task/TaskPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="about" component={AboutPage} />
        <Route path="task" component={TaskPage} />
    </Route>
);