import React, { Component } from 'react';

const INITIAL_STATE = {
    username: '',
    email: '',
    text: ''
}

export default class CreateTask extends Component {

    state = { ...INITIAL_STATE }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.username && this.state.text && this.state.email === '') { return; }

        const { username, email, text } = this.state;

        this.props.createNewTask({
            username,
            email,
            text
        });
        this.setState({ ...INITIAL_STATE });
    }

    render() {
        return (
            <form className="card m-4 p-4" onSubmit={this.handleSubmit}>
                <h2>Create New Task</h2>
                <div className="form-group">
                <label className="m-2">username
                    <input
                        onChange={this.handleInputChange}
                        type="text"
                        className="form-control"
                        name="username"
                        required={true}
                        value={this.state.username}
                    />
                </label>
                <label className="m-2">email
                    <input
                        onChange={this.handleInputChange}
                        type="email"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                    />
                </label>
                <label className="m-2">text
                    <input
                        onChange={this.handleInputChange}
                        type="text"
                        className="form-control"
                        name="text"
                        required={true}
                        value={this.state.text}
                    />
                </label>
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        )
    }
}
