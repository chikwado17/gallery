import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        image: ''
    }

    onInputChange = (e) => {
        this.setState({
            image:e.target.value
        });
    }

    onPhotoSearchSubmit = (e) => {
        e.preventDefault();

        this.props.onPhotoSearch(this.state.image);
    }

    render() {
        const { image } = this.state;
        return (
            <div className="ui segment">
                <form onSubmit={this.onPhotoSearchSubmit} className="ui form">
                    <div className="field">
                        <label>Search Photos</label>
                        <input type="text" value={image} placeholder="search your photos" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
