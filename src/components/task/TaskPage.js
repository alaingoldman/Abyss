import React from 'react';
import { getTasks } from '../../api/tasksApi';

export default class TaskPage extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        }
    }

    asnyc crap () {
        const result = await getTasks(); 
    }

    // asnyc componentDidMount(){
    //     const result = await getTasks(); 

    //     // getTasks().then((resp) => {
    //     //     console.log(resp);
    //     //     this.setState({
    //     //         tasks: resp
    //     //     });
    //     // });
    // }

    allTasks() {
        return this.state.tasks.map((x) => {
            return <p key={x.createdAt}> {x.message} | {x.author} | {x.createdAt} </p>;
        });
    }

    render(){
        return(
            <div> 
                {this.allTasks()}
            </div>
        );
    }
}