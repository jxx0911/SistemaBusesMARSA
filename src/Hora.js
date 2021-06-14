import React from "react";

export class Hora extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({ date: new Date() });
	}
	render() {
		return (
			<div className="d-flex flex-row">
				<p className="m-3" style={{ color: "#fff" }}>
					{this.state.date.toLocaleDateString()}
				</p>
				<p className="m-3" style={{ color: "#fff" }}>
					{this.state.date.toLocaleTimeString()}
				</p>
			</div>
		);
	}
}
