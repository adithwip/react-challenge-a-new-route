import _ from 'lodash';
import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';


// API key from Google to use API
const API_KEY = 'AIzaSyBjEmYdKyD8VaavuLFJsCwr_pNAC2lt9PY';

// Create a new component.
// This component should produce some HTML
class Homepage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('shooting stars');
	}

	videoSearch(term) {
		// search API
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const searchLodashed = _.debounce((term) => { this.videoSearch(term) }, 300)

		return (
			<div>
				<SearchBar onSearchTermChange={searchLodashed} />
				<div className="container">
					<div className="row">
						<VideoDetail video={this.state.selectedVideo} />
						<VideoList 
						onVideoSelect={selectedVideo => this.setState({selectedVideo})}
						videos={this.state.videos} />
					</div>
				</div>
				
			</div>
		);
	}
}

export default Homepage;