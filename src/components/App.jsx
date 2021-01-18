import React from 'react';
import SearchBar from './searchBar/SearchBar';
import PhotoList from './photo/PhotoList';
import Unsplash from './apis/Unsplash';
import './App.css';
import ViewPhoto from './photo/ViewPhoto';


class App extends React.Component {

    state = {
        photos: [],
        selectedPhoto: null
    }

    onPhotoSearch = async (photo) => {
        const response = await Unsplash.get('/photos', {
            params: {
                query: photo
            }
        });

        this.setState({
             photos: response.data.results,
             selectedPhoto: response.data.results[0]
        });
    };

    handleSelectedPhoto = (photo) => {
        this.setState({
            selectedPhoto: photo
        }); 
    };

    render(){
        const { photos, selectedPhoto } = this.state;
        return(
            <div className="container">
                <div className="searchbarTop">
                    <SearchBar onPhotoSearch={this.onPhotoSearch} />
                </div>
                <div>
                    <ViewPhoto selectedPhoto={selectedPhoto} />
                </div>
                <div>
                    <PhotoList photos={photos} selectedImage={this.handleSelectedPhoto} />
                </div>
            </div>
        );
    }
}

export default App;