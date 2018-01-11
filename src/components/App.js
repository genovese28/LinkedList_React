import React, { Component } from "react";
import UserAuth from "./organisms/UserAuth";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to LinkedList</h1>
				</header>
				<UserAuth />
			</div>
		);
	}
}

export default App;
