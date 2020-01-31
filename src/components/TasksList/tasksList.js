import React, { Component } from "react";
import Task from "../Task/task";
// const INITIAL_STATE = {
//
// };

export default class TaskList extends Component {



    handleSubmit = task => {
        this.props.updateTask( task);

    }
    render() {
        return (
            <ul className="d-flex justify-content-around">
                {this.props.tasks.map(task =>
                    <Task
                        key={task.id}
                        task={task}
                        {...this.props}
                        handleInputChange={this.handleInputChange}
                        onEditSuccess={this.handleSubmit}
                    />
                )}
            </ul>
        )
    }


}


