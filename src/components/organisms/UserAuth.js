import React, { Component } from "react";
import UserSignupForm from "../molecules/UserSignupForm";

class UserAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <UserSignupForm />;
	}
}

export default UserAuth;
