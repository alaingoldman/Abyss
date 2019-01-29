import {Route, Switch} from 'react-router-dom';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import Header from './common/Header';
import HomePage from './home/HomePage';
import NoMatchPage from './noMatch/NoMatchPage';
import TaskPage from './task/TaskPage';

const defaultProps = {};

const App = () => (
    <div>
        <Header/>
        <Switch {...defaultProps}>
            <Route exact path="/"  component={HomePage}/>
            <Route path="/courses" component={CoursesPage} />
            <Route path="/about"   component={AboutPage} />
            <Route path="/task"    render={() =>(
                <TaskPage {...defaultProps} />
            )} />
            <Route component={NoMatchPage}/>
        </Switch>
    </div>
);

export default App;