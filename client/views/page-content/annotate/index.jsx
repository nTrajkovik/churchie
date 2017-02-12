import React, { Component } from 'react';

class Annotate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// All the user information that pubnub 
			// will need I expect to come from props.
			// pageText: '',
			// path: '',
			// name: '',
			// googleId: '',
			comment: '' 
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			comment: event.target.value
		});
	}
	
	handleSubmit(event) {
		//will emit to pubnub
	}

	render() {
		return (
				<div className="annotate">
					<form onSubmit={this.handleSubmit}>
						<label className="annotateLabel">Annotate</label>
						<textarea className="annotateText" 
						          value={this.state.comment}
						          onChange={this.handleChange} />
						<input type="submit" value="Submit" />
					</form>
				</div>
		);
	}
}

export default Annotate;