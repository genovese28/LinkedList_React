import React, { Component } from "react";
import UserAuth from "../organisms/UserAuth";

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <UserAuth />;
	}
}

export default LoginPage;
