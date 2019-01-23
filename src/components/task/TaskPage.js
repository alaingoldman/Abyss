import React from 'react';
import { getTasks } from '../../api/tasksApi';

export default class TaskPage extends React.Component {
    constructor(props) {
        super(props);

    }

    // async componentDidMount() {
    componentDidMount() {
        // const x = await getTasks();
        const x = getTasks();
        x.then((resp) => {
            console.log(resp);
        });
    }

    render(){
        return(
            <div> well shit?</div>
        );
    }
}