import React, { Component } from "react";

class UserSignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstname: "",
            lastname: "",
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
        if (this.state.title) {
            this.props.handleSubmit(this.state);
            this.setState({
                email: "",
                firstname: "",
                lastname: "",
                username: "",
                password: ""
            });
        }
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
                            name="firstname"
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
                            name="lastname"
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
