import React from 'react';
import SearchBar from './searchBar/SearchBar';
import PhotoList from './photo/PhotoList';
import Unsplash from './apis/Unsplash';

class App extends React.Component {

    state = {
        photos: []
    }


    onPhotoSearch = async (photo) => {
        const response = await Unsplash.get('/photos', {
            params: {
                query: photo
            }
        });

        this.setState({
             photos: response.data.results
        });

    }

    render(){
        const { photos } = this.state;
        return(
            <div className="ui container">
                <SearchBar onPhotoSearch={this.onPhotoSearch} />
                <PhotoList photos={photos} />
            </div>
        );
    }
}

export default App;