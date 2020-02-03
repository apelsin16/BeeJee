import React, { Component } from 'react';

const INITIAL_STATE = {
    username: '',
    password: '',
}

export default class Navbar extends Component {

    state = { ...INITIAL_STATE }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.username && this.state.password === '') { return; }

        const { username, password } = this.state;

        this.props.userLogin({
            username,
            password
        });
        this.setState({ ...INITIAL_STATE });
    }

    render() {
        return (
            <nav aria-label="breadcrumb" >
                {
                    this.props.isLogged ?
                        <p className="breadcrumb d-flex justify-content-end">You logged in
                        <button
                            className='btn btn-primary'
                            onClick={this.props.logOut}>Log Out</button>
                        </p> :
                        <form onSubmit={this.handleSubmit} className="breadcrumb d-flex justify-content-end">
                            <div className="form-group">
                                <label className="m-2">username
                                    <input
                                        onChange={this.handleInputChange}
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={this.state.username}
                                    />
                                </label>

                                <label className="m-2">password
                                    <input
                                        onChange={this.handleInputChange}
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                    />
                                </label>
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>
                }

            </nav>
        )
    }
}
