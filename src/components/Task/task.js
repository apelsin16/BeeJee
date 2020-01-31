import React, { Component } from 'react';

export default class Task extends Component {
    state = {
        text: this.props.task.text,
        status: this.props.task.status,
        id: this.props.task.id
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({ [name]: value });
    };

    handleEditSuccess = e => {
        e.preventDefault();

        this.props.onEditSuccess(this.state);
    };

    render () {
        const {task} = this.props;
        return (
            <li key={task.id} className="m-2">

                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{task.username}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{task.email}</h6>
                        <form onSubmit={this.handleEditSuccess}>

                            {this.props.isLogged === '' ?
                                <p className="card-text">{task.text}</p> :
                                <input
                                    type="text"
                                    onChange={this.handleInputChange}
                                    name="text"
                                    value={this.state.text}
                                />}
                            {this.props.isLogged === '' ?
                                <div>{task.status === 0 ? <p style={{color: "red"}}>In progress</p> : <p style={{color: "green"}} >Done</p>}</div> :
                                (<label >Task completed
                                    <input
                                        type="checkbox"
                                        className="ml-2"
                                        onChange={this.handleInputChange}
                                        name="status"
                                        checked={this.state.status === 10 ? true : false}
                                    />
                                </label>)}
                            {this.props.isLogged !== '' ?
                                <div><button className="btn btn-primary mt-2">Edit</button> </div>:
                                null}
                        </form>

                    </div>
                </div>




            </li>
        )
    }
}
