import React from 'react';
import './PhotoListItems.css';

const PhotoListItems = ({photo, selectedImage}) => {
    return (
        <div className="searchbarTop">
            <div onClick={() => selectedImage(photo) }>
                <img className="img__size" src={photo.urls.regular} alt={photo.alt_description}/>
            </div>
        </div>
    );
}

export default PhotoListItems;