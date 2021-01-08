import React from 'react';
import PhotoListItem from './PhotoListItems';


const PhotoList = ({photos}) => {
    if(!photos) {
        return <div>Loading...</div>
    }
    return (
        <div>
           {photos.map(photo => (
               <PhotoListItem key={photo.id} photo={photo} />
           ))} 
        </div>
    );
}

export default PhotoList;