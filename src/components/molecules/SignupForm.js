import React, { Component } from "react";

class UserSignupForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        };
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
        this.setState({
            email: "",
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        });
    }

    render() {
        let { title, description } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-area">
                    <label>
                        Email:
                        <input
                            type="email"
                            placeholder="email"
                            onChange={this.handleChange}
                            name="email"
                            value={description}
                        />
                    </label>
                </div>
                <div className="input-area">
                    <label>
                        First Name:
                        <input
                            type="text"
                            placeholder="First Name"
                            onChange={this.handleChange}
                            name="firstName"
                            value={description}
                        />
                    </label>
                </div>
                <div className="input-area">
                    <label>
                        Last Name
                        <input
                            type="text"
                            placeholder="Last Name"
                            onChange={this.handleChange}
                            name="lastName"
                            value={description}
                        />
                    </label>
                </div>
                <div className="input-area">
                    <label>
                        username:
                        <input
                            type="text"
                            placeholder="username"
                            onChange={this.handleChange}
                            name="username"
                            value={title}
                        />
                    </label>
                </div>
                <div className="input-area">
                    <label>
                        password:
                        <input
                            type="text"
                            placeholder="password"
                            onChange={this.handleChange}
                            name="password"
                            value={description}
                        />
                    </label>
                </div>
                <input type="submit" value="I'm in!" />
            </form>
        );
    }
}

export default UserSignupForm;
