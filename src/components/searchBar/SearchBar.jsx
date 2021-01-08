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

    render() {
        const { image } = this.state;
        return (
            <div className="ui segment">
                <form class="ui form">
                    <div class="field">
                        <label>Search Photos</label>
                        <input type="text" value={image} placeholder="search your photos" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
