import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}
	}

	render() {
		return(
			<div className="search-bar">
				<Link to="/" className="link-to">Home</Link>
				<Link to="/about" className="link-to">About</Link>
				<input value={this.state.term} onChange = {event => this.onInputChange(event.target.value) } />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term)
	}
}

export default SearchBar;