import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = (ev) => {
		this.setState({ term: ev.target.value })
	};

	onFormSubmit = (ev) => {
		ev.preventDefault();

		//call callback from parent component
	};

    render() {
        return (
            <div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Video Search</label>
						<input 
							type="text" 
							value={this.state.term}
							onChange={this.onInputChange} 
						/>
					</div>
				</form>
			</div>
        );
    }
}

export default SearchBar;