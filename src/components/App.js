import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
 
const KEY = "AIzaSyAq4bbeBxgiKZq5e9V976pPx34JUnRQno4";

class App extends React.Component {
	render(){
		return (
			<div className="ui container">
				<SearchBar />
			</div>
		);
	}
}

export default App;