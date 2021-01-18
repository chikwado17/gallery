import React from 'react';
import PhotoListItem from './PhotoListItems';


const PhotoList = ({photos, selectedImage}) => {
    if(!photos) {
        return <div>Loading...</div>
    }
    return (
            <div className="row">
                    {photos.map(photo => (
                        <div className="col col-xs-3 col-lg-3 col-sm-3" key={photo.id}>
                            <PhotoListItem photo={photo} selectedImage={selectedImage} />
                        </div>
                ))} 
            </div>
    );
}

export default PhotoList;