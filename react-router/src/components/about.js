import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class About extends Component {
	render() {
		return(
			<div className="jumbotron">
				<h1 className="display-3">Welcome to miniYouTube App!</h1>
				<p className="lead">An App that use YouTube API created and maintain by Adith Widya Pradipta</p>
				<hr className="my-4" />
				<p>It uses many technologies such as React, Google API, React-router-DOM, and some Bootstrap to make it more pretty. Go ahead an use this app like you use normal YouTube, because it is basically just a YouTube YouTube :D</p>
				<p className="lead">
					<Link to="/" className="btn btn-primary btn-lg" role="button">Explore Videos</Link>
				</p>
			</div>
		)
	}
}

export default About;